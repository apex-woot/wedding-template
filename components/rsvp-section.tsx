"use client"

import { type FormEvent, useState } from "react"
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

  return (
    <section
      aria-labelledby="rsvp-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#eef4fb_0%,#edf2f8_100%)] px-4 pt-[clamp(4.5rem,10vw,7rem)] pb-[clamp(5rem,12vw,8rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(184,203,228,0.2),transparent_22%),radial-gradient(circle_at_82%_76%,rgba(221,228,237,0.42),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />

      <div className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-[#fffdfa]/92 px-5 pt-10 pb-12 shadow-[0_24px_70px_rgba(134,154,188,0.14)] ring-1 ring-white/80 md:px-10 md:pt-14 md:pb-16">
        <div className="text-center">
          <h2
            id="rsvp-title"
            className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-light italic tracking-[-0.03em] text-[#88a9d2]"
          >
            RSVP
          </h2>
          <p className="mx-auto mt-5 max-w-[32rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#6e7f98]">
            Будь ласка, заповніть одну форму на пару або сім'ю.
          </p>
        </div>

        <form className="mt-8 md:mt-10" onSubmit={handleSubmit}>
          <FieldGroup className="gap-5">
            <Field>
              <FieldLabel htmlFor="family-surname" className="text-[#51647f]">
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
                className="h-11 rounded-xl border-[#d7e3f2] bg-white px-4 text-sm text-[#51647f]"
              />
            </Field>

            <div className="grid gap-4 md:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="adults-count" className="text-[#51647f]">
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
                  className="h-11 rounded-xl border-[#d7e3f2] bg-white px-4 text-sm text-[#51647f]"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="children-count" className="text-[#51647f]">
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
                  className="h-11 rounded-xl border-[#d7e3f2] bg-white px-4 text-sm text-[#51647f]"
                />
              </Field>
            </div>

            <FieldGroup className="gap-3 rounded-[1.5rem] border border-[#dde7f3] bg-[#f9fbfe] p-4 md:p-5">
              <Field orientation="horizontal">
                <FieldLabel htmlFor="attending" className="text-[#51647f]">
                  <Checkbox
                    id="attending"
                    checked={form.attending}
                    onCheckedChange={(checked) => {
                      setBooleanField("attending", checked === true)
                      setSubmitted(false)
                    }}
                    className="mt-0.5 size-5 rounded-md border-[#9db6d8] bg-white text-white data-checked:border-[#93b4dc] data-checked:bg-[#93b4dc]"
                  />
                  <FieldContent>
                    <FieldTitle className="text-[#51647f]">
                      Ми будемо присутні
                    </FieldTitle>
                  </FieldContent>
                </FieldLabel>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel htmlFor="hotel-booking" className="text-[#51647f]">
                  <Checkbox
                    id="hotel-booking"
                    checked={form.hotelBooking}
                    onCheckedChange={(checked) => {
                      setBooleanField("hotelBooking", checked === true)
                      setSubmitted(false)
                    }}
                    className="mt-0.5 size-5 rounded-md border-[#9db6d8] bg-white text-white data-checked:border-[#93b4dc] data-checked:bg-[#93b4dc]"
                  />
                  <FieldContent>
                    <FieldTitle className="text-[#51647f]">
                      Ми будемо бронювати номер у готелі
                    </FieldTitle>
                  </FieldContent>
                </FieldLabel>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel
                  htmlFor="transfer-needed"
                  className="text-[#51647f]"
                >
                  <Checkbox
                    id="transfer-needed"
                    checked={form.transferNeeded}
                    onCheckedChange={(checked) => {
                      setBooleanField("transferNeeded", checked === true)
                      setSubmitted(false)
                    }}
                    className="mt-0.5 size-5 rounded-md border-[#9db6d8] bg-white text-white data-checked:border-[#93b4dc] data-checked:bg-[#93b4dc]"
                  />
                  <FieldContent>
                    <FieldTitle className="text-[#51647f]">
                      Нам потрібен трансфер
                    </FieldTitle>
                  </FieldContent>
                </FieldLabel>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel
                  htmlFor="attending-church"
                  className="text-[#51647f]"
                >
                  <Checkbox
                    id="attending-church"
                    checked={form.attendingChurch}
                    onCheckedChange={(checked) => {
                      setBooleanField("attendingChurch", checked === true)
                      setSubmitted(false)
                    }}
                    className="mt-0.5 size-5 rounded-md border-[#9db6d8] bg-white text-white data-checked:border-[#93b4dc] data-checked:bg-[#93b4dc]"
                  />
                  <FieldContent>
                    <FieldTitle className="text-[#51647f]">
                      Ми будемо присутні на церковній церемонії
                    </FieldTitle>
                  </FieldContent>
                </FieldLabel>
              </Field>
            </FieldGroup>

            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
              <FieldDescription className="text-center text-[#8a9ebd] md:text-left">
                Однієї відповіді на одне запрошення достатньо.
              </FieldDescription>

              <Button
                type="submit"
                className="h-11 rounded-full bg-[#93b4dc] px-6 text-[0.8rem] font-medium uppercase tracking-[0.18em] text-white hover:bg-[#88abd6]"
              >
                Надіслати відповідь
              </Button>
            </div>

            {submitted ? (
              <p className="rounded-[1.25rem] bg-[#edf4fc] px-4 py-3 text-center font-sans text-sm text-[#5f7491]">
                Дякуємо. Ваша відповідь готова до передання молодятам.
              </p>
            ) : null}
          </FieldGroup>
        </form>
      </div>
    </section>
  )
}
