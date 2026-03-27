"use client"

import { type FormEvent, useState } from "react"
import { motion } from "framer-motion"
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

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  }

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section
      aria-labelledby="rsvp-title"
      className="relative overflow-hidden bg-[#fdfbf7] px-4 pt-[clamp(6rem,12vw,10rem)] pb-[clamp(8rem,15vw,12rem)]"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#fcfaf6_0%,rgba(253,251,247,0)_100%)]" />

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
            className="font-display text-[clamp(3.5rem,10vw,5.5rem)] leading-[0.95] font-light italic tracking-[-0.03em] text-[#4a5f7e]"
          >
            RSVP
          </motion.h2>
          <motion.div variants={itemVariants} className="mx-auto w-[1px] h-10 bg-[#93b4dc]/60 mt-8 mb-6" />
          <motion.p variants={itemVariants} className="mx-auto max-w-[28rem] text-balance font-sans text-[clamp(0.95rem,2.5vw,1.1rem)] leading-[1.8] text-[#6b7b93] font-light tracking-wide">
            Будь ласка, заповніть одну форму на пару або сім'ю.
          </motion.p>
        </div>

        <motion.div variants={itemVariants}>
          <form className="mt-8 md:mt-12 bg-white/40 backdrop-blur-sm p-8 md:p-14 border border-[#e8eff6] shadow-[0_40px_100px_rgba(134,154,188,0.06)]" onSubmit={handleSubmit}>
            <FieldGroup className="gap-10">
              <Field>
                <FieldLabel htmlFor="family-surname" className="text-[#6b7b93] font-normal tracking-wide text-xs uppercase mb-1">
                  Прізвище сім'ї
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
                  className="h-12 rounded-none border-0 border-b border-[#c8d8ec] bg-transparent px-0 text-[1.1rem] text-[#4a5f7e] focus-visible:ring-0 focus-visible:border-[#4a5f7e] placeholder:text-[#a8c4e8]/50 transition-colors"
                />
              </Field>

              <div className="grid gap-10 md:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="adults-count" className="text-[#6b7b93] font-normal tracking-wide text-xs uppercase mb-1">
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
                    className="h-12 rounded-none border-0 border-b border-[#c8d8ec] bg-transparent px-0 text-[1.1rem] text-[#4a5f7e] focus-visible:ring-0 focus-visible:border-[#4a5f7e] transition-colors text-center"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="children-count" className="text-[#6b7b93] font-normal tracking-wide text-xs uppercase mb-1">
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
                    className="h-12 rounded-none border-0 border-b border-[#c8d8ec] bg-transparent px-0 text-[1.1rem] text-[#4a5f7e] focus-visible:ring-0 focus-visible:border-[#4a5f7e] transition-colors text-center"
                  />
                </Field>
              </div>

              <div className="mt-6 pt-10 border-t border-[#e8eff6] grid gap-6">
                <Field orientation="horizontal" className="items-center">
                  <FieldLabel htmlFor="attending" className="text-[#6b7b93] cursor-pointer flex items-center gap-4">
                    <Checkbox
                      id="attending"
                      checked={form.attending}
                      onCheckedChange={(checked) => {
                        setBooleanField("attending", checked === true)
                        setSubmitted(false)
                      }}
                      className="size-[22px] rounded-sm border-[#a8c4e8] data-checked:border-[#678bb8] data-checked:bg-[#678bb8] transition-all"
                    />
                    <FieldContent>
                      <FieldTitle className="text-[#4a5f7e] font-light text-[1.05rem]">
                        Ми будемо присутні
                      </FieldTitle>
                    </FieldContent>
                  </FieldLabel>
                </Field>

                <Field orientation="horizontal" className="items-center">
                  <FieldLabel htmlFor="hotel-booking" className="text-[#6b7b93] cursor-pointer flex items-center gap-4">
                    <Checkbox
                      id="hotel-booking"
                      checked={form.hotelBooking}
                      onCheckedChange={(checked) => {
                        setBooleanField("hotelBooking", checked === true)
                        setSubmitted(false)
                      }}
                      className="size-[22px] rounded-sm border-[#a8c4e8] data-checked:border-[#678bb8] data-checked:bg-[#678bb8] transition-all"
                    />
                    <FieldContent>
                      <FieldTitle className="text-[#4a5f7e] font-light text-[1.05rem]">
                        Ми будемо бронювати номер у готелі
                      </FieldTitle>
                    </FieldContent>
                  </FieldLabel>
                </Field>

                <Field orientation="horizontal" className="items-center">
                  <FieldLabel
                    htmlFor="transfer-needed"
                    className="text-[#6b7b93] cursor-pointer flex items-center gap-4"
                  >
                    <Checkbox
                      id="transfer-needed"
                      checked={form.transferNeeded}
                      onCheckedChange={(checked) => {
                        setBooleanField("transferNeeded", checked === true)
                        setSubmitted(false)
                      }}
                      className="size-[22px] rounded-sm border-[#a8c4e8] data-checked:border-[#678bb8] data-checked:bg-[#678bb8] transition-all"
                    />
                    <FieldContent>
                      <FieldTitle className="text-[#4a5f7e] font-light text-[1.05rem]">
                        Нам потрібен трансфер
                      </FieldTitle>
                    </FieldContent>
                  </FieldLabel>
                </Field>

                <Field orientation="horizontal" className="items-center">
                  <FieldLabel
                    htmlFor="attending-church"
                    className="text-[#6b7b93] cursor-pointer flex items-center gap-4"
                  >
                    <Checkbox
                      id="attending-church"
                      checked={form.attendingChurch}
                      onCheckedChange={(checked) => {
                        setBooleanField("attendingChurch", checked === true)
                        setSubmitted(false)
                      }}
                      className="size-[22px] rounded-sm border-[#a8c4e8] data-checked:border-[#678bb8] data-checked:bg-[#678bb8] transition-all"
                    />
                    <FieldContent>
                      <FieldTitle className="text-[#4a5f7e] font-light text-[1.05rem]">
                        Ми будемо присутні на церковній церемонії
                      </FieldTitle>
                    </FieldContent>
                  </FieldLabel>
                </Field>
              </div>

              <div className="mt-8 pt-10 border-t border-[#e8eff6] flex flex-col items-center gap-8">
                <Button
                  type="submit"
                  className="h-14 w-full md:w-auto min-w-[200px] rounded-none bg-[#678bb8] px-10 text-[0.8rem] font-normal uppercase tracking-[0.25em] text-white hover:bg-[#4a5f7e] transition-colors duration-500"
                >
                  Надіслати
                </Button>
                
                <FieldDescription className="text-center text-[#8a9ebd]/70 text-xs font-light tracking-wide uppercase">
                  Однієї відповіді на одне запрошення достатньо
                </FieldDescription>
              </div>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 border border-[#c8d8ec] bg-[#f9fbfe] px-6 py-5 text-center font-sans text-sm text-[#4a5f7e] tracking-wide"
                >
                  Дякуємо. Ваша відповідь успішно передана.
                </motion.div>
              ) : null}
            </FieldGroup>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
