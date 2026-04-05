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
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

export function RsvpSection() {
  const [form, setForm] = useState<RsvpFormState>(initialState)
  const [submitted, setSubmitted] = useState(false)

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="rsvp"
      aria-labelledby="rsvp-title"
      className="relative overflow-hidden bg-[#F5F0E8] px-4 pt-[clamp(6rem,12vw,10rem)] pb-[clamp(8rem,15vw,12rem)]"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#F3EEE5_0%,rgba(245,240,232,0)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(107,83,57,0.04),transparent_40%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[42rem]"
      >
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            id="rsvp-title"
            className="font-display text-[clamp(3.5rem,10vw,5.5rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#364274]"
          >
            RSVP
          </motion.h2>
          <motion.div variants={itemVariants} className="mx-auto w-[1px] h-10 bg-[#583C2A]/40 mt-8 mb-6" />
          <motion.p variants={itemVariants} className="mx-auto max-w-[28rem] text-balance font-sans text-[clamp(0.95rem,2.5vw,1.1rem)] leading-[1.8] text-[#4E5D72] font-light tracking-wide">
            Будь ласка, заповніть одну форму на пару або сім&rsquo;ю.
          </motion.p>
        </div>

        <motion.div variants={itemVariants}>
          <form className="mt-8 md:mt-12 bg-[#FAF7F2]/40 backdrop-blur-sm p-8 md:p-14 border border-[#E8DCCB]/60 shadow-[0_40px_100px_rgba(80,68,52,0.04)]" onSubmit={handleSubmit}>
            <FieldGroup className="gap-10">
              <Field>
                <FieldLabel htmlFor="family-surname" className="text-[#4E5D72] font-normal tracking-wide text-xs uppercase mb-1">
                  Прізвище сім&rsquo;ї
                </FieldLabel>
                <Input
                  id="family-surname"
                  value={form.familySurname}
                  onChange={(event) => {
                    setForm((current) => ({
                      ...current,
                      familySurname: event.target.value,
                    }))
                    setSubmitted(false)
                  }}
                  placeholder="Наприклад, родина Когутів"
                  className="h-12 rounded-none border-0 border-b border-[#E8DCCB] bg-transparent px-0 text-[1.1rem] text-[#364274] focus-visible:ring-0 focus-visible:border-[#583C2A] placeholder:text-[#A09483]/50 transition-colors"
                />
              </Field>

              <div className="grid gap-10 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="adults-count" className="text-[#4E5D72] font-normal tracking-wide text-xs uppercase mb-1">
                    Кількість дорослих
                  </FieldLabel>
                  <Input
                    id="adults-count"
                    type="number"
                    min="1"
                    value={form.adultsCount}
                    onChange={(event) => {
                      setNumberField("adultsCount", event.target.value)
                      setSubmitted(false)
                    }}
                    className="h-12 rounded-none border-0 border-b border-[#E8DCCB] bg-transparent px-0 text-[1.1rem] text-[#364274] focus-visible:ring-0 focus-visible:border-[#583C2A] transition-colors text-center"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="children-count" className="text-[#4E5D72] font-normal tracking-wide text-xs uppercase mb-1">
                    Кількість дітей
                  </FieldLabel>
                  <Input
                    id="children-count"
                    type="number"
                    min="0"
                    value={form.childrenCount}
                    onChange={(event) => {
                      setNumberField("childrenCount", event.target.value)
                      setSubmitted(false)
                    }}
                    className="h-12 rounded-none border-0 border-b border-[#E8DCCB] bg-transparent px-0 text-[1.1rem] text-[#364274] focus-visible:ring-0 focus-visible:border-[#583C2A] transition-colors text-center"
                  />
                </Field>
              </div>

              <div className="mt-6 pt-10 border-t border-[#E8DCCB]/50 grid gap-6">
                {[
                  { id: "attending", field: "attending" as const, label: "Ми будемо присутні" },
                  { id: "hotel-booking", field: "hotelBooking" as const, label: "Ми будемо бронювати номер у готелі" },
                  { id: "transfer-needed", field: "transferNeeded" as const, label: "Нам потрібен трансфер" },
                  { id: "attending-church", field: "attendingChurch" as const, label: "Ми будемо присутні на церковній церемонії" },
                ].map(({ id, field, label }) => (
                  <motion.div
                    key={id}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Field orientation="horizontal" className="items-center">
                      <FieldLabel htmlFor={id} className="text-[#4E5D72] cursor-pointer flex items-center gap-4">
                        <Checkbox
                          id={id}
                          checked={form[field]}
                          onCheckedChange={(checked) => {
                            setBooleanField(field, checked === true)
                            setSubmitted(false)
                          }}
                          className="size-[22px] rounded-sm border-[#B5A999] data-checked:border-[#583C2A] data-checked:bg-[#583C2A] transition-all"
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

              <div className="mt-8 pt-10 border-t border-[#E8DCCB]/50 flex flex-col items-center gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto"
                >
                  <Button
                    type="submit"
                    className="h-14 w-full md:w-auto min-w-[200px] rounded-none bg-[#364274] px-10 text-[0.8rem] font-normal uppercase tracking-[0.25em] text-[#F5F0E8] hover:bg-[#364274] transition-colors duration-500"
                  >
                    Надіслати
                  </Button>
                </motion.div>

                <FieldDescription className="text-center text-[#A09483]/70 text-xs font-light tracking-wide uppercase">
                  Однієї відповіді на одне запрошення достатньо
                </FieldDescription>
              </div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="border border-[#E8DCCB] bg-[#FAF7F2] px-6 py-5 text-center font-sans text-sm text-[#364274] tracking-wide">
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
