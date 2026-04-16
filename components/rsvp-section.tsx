"use client"

import { AnimatePresence, motion } from "framer-motion"
import { type FormEvent, Fragment, useState } from "react"
import { useTranslation } from "@/components/i18n-provider"
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
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { Dict } from "@/lib/i18n"
import { buildGoogleCalendarUrl, downloadIcsFile } from "@/lib/rsvp-reminder"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

type RoomType = "" | "double" | "triple" | "house"
type PartyType = "single" | "couple" | "family"
type ErrorCode = keyof Dict["rsvp"]["errors"]

type RsvpFormState = {
  familySurname: string
  partyType: PartyType
  attending: boolean
  hotelBooking: boolean
  childrenCount: number
  adultsCount: number
  transferNeeded: boolean
  attendingChurch: boolean
  roomType: RoomType
}

const PARTY_TYPES: readonly PartyType[] = ["single", "couple", "family"] as const

const initialState: RsvpFormState = {
  familySurname: "",
  partyType: "couple",
  attending: false,
  hotelBooking: false,
  childrenCount: 0,
  adultsCount: 2,
  transferNeeded: false,
  attendingChurch: false,
  roomType: "",
}

const ERROR_CODES: readonly ErrorCode[] = [
  "duplicate",
  "rateLimit",
  "validation",
  "surnameInvalid",
  "generic",
] as const

function toErrorCode(value: unknown): ErrorCode {
  return typeof value === "string" &&
    (ERROR_CODES as readonly string[]).includes(value)
    ? (value as ErrorCode)
    : "generic"
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
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
  const { t } = useTranslation()
  const [form, setForm] = useState<RsvpFormState>(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [errorCode, setErrorCode] = useState<ErrorCode | null>(null)

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

  function setPartyType(next: PartyType) {
    setForm((current) => {
      if (next === "single")
        return { ...current, partyType: next, adultsCount: 1, childrenCount: 0 }
      if (next === "couple")
        return { ...current, partyType: next, adultsCount: 2, childrenCount: 0 }
      return {
        ...current,
        partyType: next,
        adultsCount: Math.max(current.adultsCount, 2),
      }
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.familySurname.trim()) return
    setSubmitting(true)
    setErrorCode(null)

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
          roomType: form.hotelBooking ? form.roomType : "",
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorCode(toErrorCode(data.code))
        return
      }
      setSubmitted(true)
    } catch {
      setErrorCode("generic")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="rsvp"
      aria-label={t.nav.rsvp}
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
            <span className="italic">{t.rsvp.title}</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mx-auto mt-5 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#583C2A]/40 to-transparent"
          />
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-[28rem] text-balance font-sans text-[clamp(0.95rem,2.5vw,1.1rem)] leading-[1.85] text-[#583C2A] font-light"
          >
            {t.rsvp.subtitle}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-[32rem] text-balance font-sans text-[clamp(0.88rem,2.2vw,1rem)] leading-[1.8] text-[#583C2A]/80 font-light"
          >
            {t.rsvp.deadlineNote}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-6 flex justify-center"
          >
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#583C2A]/25 bg-white/60 px-5 py-2.5 font-sans text-[0.72rem] font-medium uppercase tracking-[0.22em] text-[#583C2A] backdrop-blur-sm transition-all duration-300 hover:border-[#583C2A]/60 hover:bg-white hover:text-[#364274] focus-visible:border-[#583C2A] focus-visible:outline-none"
                >
                  <svg
                    aria-hidden="true"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4.5" width="18" height="16.5" rx="2" />
                    <path d="M3 9.5h18" />
                    <path d="M8 3v3" />
                    <path d="M16 3v3" />
                    <path d="M12 13.5v4" />
                    <path d="M10 15.5h4" />
                  </svg>
                  {t.rsvp.reminder.button}
                </button>
              </PopoverTrigger>
              <PopoverContent
                align="center"
                className="w-[min(22rem,calc(100vw-2rem))] bg-[#FCFBF8] text-[#364274] ring-[#D8DED5]"
              >
                <PopoverHeader>
                  <PopoverTitle className="font-display text-[1.05rem] font-medium tracking-[-0.01em] text-[#364274]">
                    {t.rsvp.reminder.popoverTitle}
                  </PopoverTitle>
                  <PopoverDescription className="font-sans text-[0.8rem] leading-[1.5] text-[#583C2A]/70">
                    {t.rsvp.reminder.popoverDescription}
                  </PopoverDescription>
                </PopoverHeader>
                <div className="flex flex-col gap-2">
                  <a
                    href={buildGoogleCalendarUrl({
                      title: t.rsvp.reminder.eventTitle,
                      details: t.rsvp.reminder.eventDetails,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-[#D8DED5] bg-white px-3 py-2 text-center font-sans text-[0.82rem] tracking-[0.04em] text-[#364274] transition-colors duration-300 hover:border-[#583C2A] hover:bg-[#583C2A]/[0.04]"
                  >
                    {t.rsvp.reminder.google}
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      downloadIcsFile({
                        title: t.rsvp.reminder.eventTitle,
                        details: t.rsvp.reminder.eventDetails,
                      })
                    }
                    className="rounded-md border border-[#D8DED5] bg-white px-3 py-2 text-center font-sans text-[0.82rem] tracking-[0.04em] text-[#364274] transition-colors duration-300 hover:border-[#583C2A] hover:bg-[#583C2A]/[0.04]"
                  >
                    {t.rsvp.reminder.ics}
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <form
            className="relative mt-8 md:mt-12 rounded-[1.5rem] bg-gradient-to-b from-white/85 to-[#FCFBF8]/65 backdrop-blur-md p-8 md:p-14 border border-white/60 shadow-[0_50px_120px_-30px_rgba(88,60,42,0.18)] ring-1 ring-[#D8DED5]/40"
            onSubmit={handleSubmit}
          >
            <FieldGroup className="gap-10">
              <fieldset className="border-0 p-0">
                <legend className="mb-3 font-sans text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#583C2A]">
                  {t.rsvp.partyType.label}
                </legend>
                <div className="grid gap-2 sm:grid-cols-3">
                  {PARTY_TYPES.map((value) => {
                    const selected = form.partyType === value
                    const inputId = `party-type-${value}`
                    const option = t.rsvp.partyType[value]
                    return (
                      <label
                        key={value}
                        htmlFor={inputId}
                        className={
                          selected
                            ? "flex cursor-pointer flex-col items-start rounded-xl border border-[#583C2A] bg-[#583C2A]/[0.06] px-4 py-3 text-left shadow-[0_10px_24px_-14px_rgba(88,60,42,0.35)] transition-all duration-300"
                            : "flex cursor-pointer flex-col items-start rounded-xl border border-[#D8DED5] bg-white/70 px-4 py-3 text-left transition-all duration-300 hover:border-[#A8BCA1] hover:bg-white"
                        }
                      >
                        <input
                          id={inputId}
                          type="radio"
                          name="partyType"
                          value={value}
                          checked={selected}
                          onChange={() => {
                            setPartyType(value)
                            setSubmitted(false)
                          }}
                          className="sr-only"
                        />
                        <span
                          className={
                            selected
                              ? "font-display text-[1.05rem] font-medium tracking-[-0.01em] text-[#364274]"
                              : "font-display text-[1.05rem] font-medium tracking-[-0.01em] text-[#583C2A]"
                          }
                        >
                          {option.title}
                        </span>
                        <span className="font-sans text-[0.72rem] tracking-[0.08em] text-[#583C2A]/60">
                          {option.description}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <Field>
                <FieldLabel
                  htmlFor="family-surname"
                  className="text-[#583C2A] font-medium tracking-[0.18em] text-[0.62rem] uppercase mb-1"
                >
                  {form.partyType === "single"
                    ? t.rsvp.nameLabelSingle
                    : t.rsvp.nameLabel}
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
                  placeholder={
                    form.partyType === "single"
                      ? t.rsvp.namePlaceholderSingle
                      : t.rsvp.namePlaceholder
                  }
                  className="h-12 rounded-none border-0 border-b border-[#D8DED5] bg-transparent px-0 text-[1.1rem] text-[#364274] focus-visible:ring-0 focus-visible:border-[#583C2A] placeholder:text-[#A8BCA1]/55 transition-colors duration-500"
                />
              </Field>

              <AnimatePresence initial={false}>
                {form.partyType === "family" && (
                  <motion.div
                    key="counts"
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.45, ease: easeOutExpo }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-10 md:grid-cols-2">
                      <Field>
                        <FieldLabel
                          htmlFor="adults-count"
                          className="text-[#583C2A] font-medium tracking-[0.18em] text-[0.62rem] uppercase mb-1"
                        >
                          {t.rsvp.adults}
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
                          {t.rsvp.children}
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
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 pt-10 border-t border-[#D8DED5]/55 grid gap-6">
                {[
                  {
                    id: "attending",
                    field: "attending" as const,
                    label:
                      form.partyType === "single"
                        ? t.rsvp.attendingSingle
                        : t.rsvp.attending,
                  },
                  {
                    id: "hotel-booking",
                    field: "hotelBooking" as const,
                    label:
                      form.partyType === "single"
                        ? t.rsvp.hotelBookingSingle
                        : t.rsvp.hotelBooking,
                  },
                  {
                    id: "transfer-needed",
                    field: "transferNeeded" as const,
                    label:
                      form.partyType === "single"
                        ? t.rsvp.transferNeededSingle
                        : t.rsvp.transferNeeded,
                  },
                  {
                    id: "attending-church",
                    field: "attendingChurch" as const,
                    label:
                      form.partyType === "single"
                        ? t.rsvp.attendingChurchSingle
                        : t.rsvp.attendingChurch,
                  },
                ].map(({ id, field, label }) => (
                  <Fragment key={id}>
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.3, ease: easeOutExpo }}
                    >
                      <Field orientation="horizontal" className="items-center">
                        <FieldLabel
                          htmlFor={id}
                          className="text-[#583C2A] cursor-pointer flex items-center gap-4"
                        >
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

                    {field === "hotelBooking" && (
                      <AnimatePresence initial={false}>
                        {form.hotelBooking && (
                          <motion.div
                            key="room-type"
                            initial={{ opacity: 0, height: 0, y: -6 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -6 }}
                            transition={{ duration: 0.45, ease: easeOutExpo }}
                            className="overflow-hidden"
                          >
                            <fieldset className="ml-[38px] mt-2 mb-1 border-0 p-0">
                              <legend className="mb-3 font-sans text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#583C2A]/55">
                                {t.rsvp.roomType}
                              </legend>
                              <div className="grid gap-2 sm:grid-cols-3">
                                {t.rsvp.roomOptions.map((option) => {
                                  const value = option.value as Exclude<
                                    RoomType,
                                    ""
                                  >
                                  const selected = form.roomType === value
                                  const inputId = `room-type-${value}`
                                  return (
                                    <label
                                      key={value}
                                      htmlFor={inputId}
                                      className={
                                        selected
                                          ? "flex cursor-pointer flex-col items-start rounded-xl border border-[#583C2A] bg-[#583C2A]/[0.06] px-4 py-3 text-left shadow-[0_10px_24px_-14px_rgba(88,60,42,0.35)] transition-all duration-300"
                                          : "flex cursor-pointer flex-col items-start rounded-xl border border-[#D8DED5] bg-white/70 px-4 py-3 text-left transition-all duration-300 hover:border-[#A8BCA1] hover:bg-white"
                                      }
                                    >
                                      <input
                                        id={inputId}
                                        type="radio"
                                        name="roomType"
                                        value={value}
                                        checked={selected}
                                        onChange={() => {
                                          setForm((current) => ({
                                            ...current,
                                            roomType: value,
                                          }))
                                          setSubmitted(false)
                                        }}
                                        className="sr-only"
                                      />
                                      <span
                                        className={
                                          selected
                                            ? "font-display text-[1.05rem] font-medium tracking-[-0.01em] text-[#364274]"
                                            : "font-display text-[1.05rem] font-medium tracking-[-0.01em] text-[#583C2A]"
                                        }
                                      >
                                        {option.title}
                                      </span>
                                      <span className="font-sans text-[0.72rem] tracking-[0.08em] text-[#583C2A]/60">
                                        {option.capacity}
                                      </span>
                                    </label>
                                  )
                                })}
                              </div>
                            </fieldset>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </Fragment>
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
                    {submitting ? t.rsvp.submitting : t.rsvp.submit}
                  </Button>
                </motion.div>

                <FieldDescription className="text-center text-[#A8BCA1]/75 text-[0.62rem] font-medium tracking-[0.18em] uppercase">
                  {t.rsvp.footerNote}
                </FieldDescription>
              </div>

              <AnimatePresence>
                {errorCode && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: 10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="rounded-md border border-red-200 bg-red-50/80 backdrop-blur-sm px-6 py-5 text-center font-sans text-sm text-red-700 tracking-wide">
                      {t.rsvp.errors[errorCode]}
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
                      {t.rsvp.success}
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
