"use client"

import { type FormEvent, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

type RsvpFormState = {
  familySurname: string
  attending: boolean
  hotelBooking: boolean
  childrenCount: number
  adultsCount: number
  transferNeeded: boolean
  attendingChurch: boolean
}

const initialState: RsvpFormState = {
  familySurname: "",
  attending: false,
  hotelBooking: false,
  childrenCount: 0,
  adultsCount: 2,
  transferNeeded: false,
  attendingChurch: false,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: easeOutExpo },
  },
}

export function RsvpSection() {
  const [form, setForm] = useState<RsvpFormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function setBooleanField(
    field: keyof Pick<
      RsvpFormState,
      "attending" | "hotelBooking" | "transferNeeded" | "attendingChurch"
    >,
    checked: boolean
  ) {
    setForm((current) => ({ ...current, [field]: checked }))
  }

  function setNumberField(
    field: keyof Pick<RsvpFormState, "childrenCount" | "adultsCount">,
    value: string
  ) {
    const parsed = Number(value)

    setForm((current) => ({
      ...current,
      [field]: Number.isFinite(parsed) && parsed >= 0 ? parsed : 0,
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.familySurname.trim()) return
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          familySurname: form.familySurname,
          adultsCount: form.adultsCount,
          childrenCount: form.childrenCount,
          attending: form.attending,
          hotelBooking: form.hotelBooking,
          transferNeeded: form.transferNeeded,
          attendingChurch: form.attendingChurch,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? "Щось пішло не так. Спробуйте ще раз.")
        return
      }
      setSubmitted(true)
    } catch {
      setError("Щось пішло не так. Спробуйте ще раз.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="rsvp"
      aria-label="RSVP"
      className="min-h-[max(100svh,720px)] relative overflow-hidden bg-[#F7F6F2] px-4 pt-[clamp(6rem,12vw,10rem)] pb-[clamp(8rem,15vw,12rem)]"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#F7F6F2_0%,rgba(245,244,240,0)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(88,60,42,0.06),transparent_42%),radial-gradient(circle_at_15%_75%,rgba(168,188,161,0.13),transparent_36%),radial-gradient(circle_at_85%_60%,rgba(143,172,194,0.08),transparent_36%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[42rem]"
      >
        <div className="text-center mb-14">
          <motion.h2
            variants={itemVariants}
            className="font-display text-[clamp(2.7rem,8vw,4.4rem)] leading-[0.95] font-medium tracking-[-0.025em] text-[#364274]"
          >
            <span className="italic">Ваша відповідь</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mx-auto mt-5 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#583C2A]/40 to-transparent"
          />
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-[28rem] text-balance font-sans text-[clamp(0.95rem,2.5vw,1.1rem)] leading-[1.85] text-[#583C2A] font-light"
          >
            Будь ласка, заповніть одну форму на пару або сім&rsquo;ю.
          </motion.p>
        </div>

        <motion.div variants={itemVariants}>
          <form
            className="relative mt-8 md:mt-12 rounded-[1.5rem] bg-gradient-to-b from-white/85 to-[#FCFBF8]/65 backdrop-blur-md p-8 md:p-14 border border-white/60 shadow-[0_50px_120px_-30px_rgba(88,60,42,0.18)] ring-1 ring-[#D8DED5]/40"
            onSubmit={handleSubmit}
          >
            <FieldGroup className="gap-10">
              <Field>
                <FieldLabel
                  htmlFor="family-surname"
                  className="text-[#583C2A] font-medium tracking-[0.18em] text-[0.62rem] uppercase mb-1"
                >
                  Прізвище сім&rsquo;ї
                </FieldLabel>
                <Input
                  id="family-surname"
                  value={form.familySurname}
                  maxLength={100}
                  onChange={(event) => {
                    setForm((current) => ({
                      ...current,
                      familySurname: event.target.value,
                    }))
                    setSubmitted(false)
                  }}
                  placeholder="Наприклад, родина Когутів"
                  className="h-12 rounded-none border-0 border-b border-[#D8DED5] bg-transparent px-0 text-[1.1rem] text-[#364274] focus-visible:ring-0 focus-visible:border-[#583C2A] placeholder:text-[#A8BCA1]/55 transition-colors duration-500"
                />
              </Field>

              <div className="grid gap-10 md:grid-cols-2">
                <Field>
                  <FieldLabel
                    htmlFor="adults-count"
                    className="text-[#583C2A] font-medium tracking-[0.18em] text-[0.62rem] uppercase mb-1"
                  >
                    Кількість дорослих
                  </FieldLabel>
                  <Input
                    id="adults-count"
                    type="number"
                    min="1"
                    max="20"
                    value={form.adultsCount}
                    onChange={(event) => {
                      setNumberField("adultsCount", event.target.value)
                      setSubmitted(false)
                    }}
                    className="h-12 rounded-none border-0 border-b border-[#D8DED5] bg-transparent px-0 text-[1.1rem] text-[#364274] focus-visible:ring-0 focus-visible:border-[#583C2A] transition-colors duration-500 text-center"
                  />
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="children-count"
                    className="text-[#583C2A] font-medium tracking-[0.18em] text-[0.62rem] uppercase mb-1"
                  >
                    Кількість дітей
                  </FieldLabel>
                  <Input
                    id="children-count"
                    type="number"
                    min="0"
                    max="20"
                    value={form.childrenCount}
                    onChange={(event) => {
                      setNumberField("childrenCount", event.target.value)
                      setSubmitted(false)
                    }}
                    className="h-12 rounded-none border-0 border-b border-[#D8DED5] bg-transparent px-0 text-[1.1rem] text-[#364274] focus-visible:ring-0 focus-visible:border-[#583C2A] transition-colors duration-500 text-center"
                  />
                </Field>
              </div>

              <div className="mt-6 pt-10 border-t border-[#D8DED5]/55 grid gap-6">
                {[
                  { id: "attending", field: "attending" as const, label: "Ми будемо присутні" },
                  { id: "hotel-booking", field: "hotelBooking" as const, label: "Ми будемо бронювати номер у готелі" },
                  { id: "transfer-needed", field: "transferNeeded" as const, label: "Нам потрібен трансфер" },
                  { id: "attending-church", field: "attendingChurch" as const, label: "Ми будемо присутні на церковній церемонії" },
                ].map(({ id, field, label }) => (
                  <motion.div
                    key={id}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3, ease: easeOutExpo }}
                  >
                    <Field orientation="horizontal" className="items-center">
                      <FieldLabel htmlFor={id} className="text-[#583C2A] cursor-pointer flex items-center gap-4">
                        <Checkbox
                          id={id}
                          checked={form[field]}
                          onCheckedChange={(checked) => {
                            setBooleanField(field, checked === true)
                            setSubmitted(false)
                          }}
                          className="size-[22px] rounded-sm border-[#A8BCA1] data-checked:border-[#583C2A] data-checked:bg-[#583C2A] transition-all duration-300"
                        />
                        <FieldContent>
                          <FieldTitle className="text-[#364274] font-light text-[1.05rem]">
                            {label}
                          </FieldTitle>
                        </FieldContent>
                      </FieldLabel>
                    </Field>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-10 border-t border-[#D8DED5]/55 flex flex-col items-center gap-8">
                <motion.div
                  whileHover={{ scale: 1.025, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: easeOutExpo }}
                  className="w-full md:w-auto"
                >
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="h-14 w-full md:w-auto min-w-[220px] rounded-full bg-gradient-to-br from-[#4A5790] to-[#364274] px-12 text-[0.78rem] font-medium uppercase tracking-[0.25em] text-[#FAF9F6] shadow-[0_24px_50px_-12px_rgba(54,66,116,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] hover:shadow-[0_30px_60px_-12px_rgba(54,66,116,0.6),inset_0_1px_0_rgba(255,255,255,0.18)] hover:from-[#566AAF] hover:to-[#3D4C82] transition-all duration-500 disabled:opacity-50"
                  >
                    {submitting ? "Надсилаємо..." : "Надіслати"}
                  </Button>
                </motion.div>

                <FieldDescription className="text-center text-[#A8BCA1]/75 text-[0.62rem] font-medium tracking-[0.18em] uppercase">
                  Однієї відповіді на одне запрошення достатньо
                </FieldDescription>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="rounded-md border border-red-200 bg-red-50/80 backdrop-blur-sm px-6 py-5 text-center font-sans text-sm text-red-700 tracking-wide">
                      {error}
                    </div>
                  </motion.div>
                )}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="rounded-md border border-[#D8DED5] bg-[#FCFBF8]/80 backdrop-blur-sm px-6 py-5 text-center font-sans text-sm text-[#364274] tracking-wide">
                      Дякуємо. Ваша відповідь успішно передана.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FieldGroup>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
