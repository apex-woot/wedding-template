"use client"

import { motion } from "framer-motion"
import type { ComponentType } from "react"
import { LuHotel, LuHouse, LuUser, LuUsers } from "react-icons/lu"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const phoneHref = "tel:+380685981328"
const phoneLabel = "+38 (068) 598 13 28"

type RoomOption = {
  id: string
  title: string
  capacity: string
  price: number
  available: number
  Icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>
}

const rooms: RoomOption[] = [
  {
    id: "double",
    title: "Двомісний номер",
    capacity: "на 2 особи",
    price: 2500,
    available: 6,
    Icon: LuUser,
  },
  {
    id: "triple",
    title: "Тримісний номер",
    capacity: "на 3 особи",
    price: 2700,
    available: 4,
    Icon: LuUsers,
  },
  {
    id: "house",
    title: "Окремий будиночок",
    capacity: "на 6 осіб",
    price: 5000,
    available: 1,
    Icon: LuHouse,
  },
]

const bookingSteps = [
  "Зателефонуйте за номером нижче.",
  "Скажіть, що ви гість на весілля родини Когутів.",
  "Назвіть бажаний тип номера та дати проживання.",
]

function formatPrice(value: number): string {
  return `${value.toLocaleString("uk-UA")} ₴`
}

function AccommodationIcon() {
  return <LuHotel aria-hidden="true" className="h-auto w-16 md:w-20" strokeWidth={1.2} />
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export function AccommodationSection() {
  return (
    <section
      aria-labelledby="accommodation-title"
      className="min-h-[max(60svh,480px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(88,60,42,0.05),transparent_24%),radial-gradient(circle_at_86%_72%,rgba(168,188,161,0.13),transparent_30%),radial-gradient(circle_at_50%_50%,rgba(143,172,194,0.06),transparent_55%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[52rem] rounded-[2rem] bg-gradient-to-b from-white/95 to-[#FCFBF8]/80 backdrop-blur-md px-5 pt-10 pb-12 text-center shadow-[0_30px_80px_-20px_rgba(88,60,42,0.16)] ring-1 ring-white/60 md:px-12 md:pt-14 md:pb-16"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 flex justify-center text-[#A8BCA1]"
        >
          <AccommodationIcon />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-sans text-[0.62rem] md:text-[0.7rem] font-medium uppercase tracking-[0.5em] text-[#583C2A]/45 mb-3"
        >
          залишайтесь з нами
        </motion.p>

        <motion.h2
          variants={itemVariants}
          id="accommodation-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#364274]"
        >
          Проживання
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-[36rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.85] font-light text-[#583C2A]"
        >
          У Yavir Resort для гостей весілля доступні три типи номерів. Сніданок
          включено у вартість.
        </motion.p>

        <motion.ul
          variants={itemVariants}
          className="mt-10 grid gap-4 text-left md:mt-12 md:grid-cols-3"
        >
          {rooms.map((room) => {
            const { Icon } = room
            const soldOut = room.available <= 0

            return (
              <li
                key={room.id}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#D8DED5]/70 bg-white/70 px-5 py-6 backdrop-blur-sm shadow-[0_14px_34px_-18px_rgba(88,60,42,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:border-[#A8BCA1] hover:shadow-[0_22px_46px_-14px_rgba(88,60,42,0.28)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#A8BCA1]/15 text-[#4A6B58]">
                    <Icon aria-hidden className="h-5 w-5" strokeWidth={1.4} />
                  </div>

                  <div
                    className={
                      soldOut
                        ? "inline-flex items-center gap-2 rounded-full border border-[#D8BCBC] bg-[#F8E6E6]/80 px-3 py-1 font-sans text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#8A3B3B]"
                        : "inline-flex items-center gap-2 rounded-full border border-[#CFDCCB] bg-[#EEF3EC]/80 px-3 py-1 font-sans text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#4A6B58]"
                    }
                  >
                    <span className="relative flex size-2">
                      {!soldOut && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A8BCA1] opacity-70" />
                      )}
                      <span
                        className={
                          soldOut
                            ? "relative inline-flex size-2 rounded-full bg-[#C58C8C]"
                            : "relative inline-flex size-2 rounded-full bg-[#6D8C79]"
                        }
                      />
                    </span>
                    {soldOut ? "немає" : `вільно ${room.available}`}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-[1.35rem] leading-tight font-medium tracking-[-0.01em] text-[#364274]">
                    {room.title}
                  </h3>
                  <p className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.22em] text-[#583C2A]/55">
                    {room.capacity}
                  </p>
                </div>

                <div className="mt-auto flex items-baseline gap-1.5 pt-2">
                  <span className="font-display text-[1.75rem] font-medium tracking-[-0.01em] text-[#583C2A]">
                    {formatPrice(room.price)}
                  </span>
                  <span className="font-sans text-[0.78rem] text-[#583C2A]/60">
                    / ніч
                  </span>
                </div>

                <p className="font-sans text-[0.78rem] text-[#583C2A]/60">
                  Сніданок включено
                </p>
              </li>
            )
          })}
        </motion.ul>

        <motion.div
          variants={itemVariants}
          className="mt-12 rounded-2xl border border-[#D8DED5]/70 bg-[#FCFBF8]/80 p-6 text-left md:p-8"
        >
          <p className="font-sans text-[0.62rem] md:text-[0.7rem] font-medium uppercase tracking-[0.35em] text-[#583C2A]/50">
            як забронювати
          </p>
          <ol className="mt-4 grid gap-3">
            {bookingSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3 font-sans text-[0.98rem] leading-[1.7] font-light text-[#583C2A]"
              >
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#364274]/10 font-sans text-[0.72rem] font-medium text-[#364274]">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-9 flex justify-center md:mt-11"
        >
          <motion.a
            href={phoneHref}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="relative inline-flex min-w-[14rem] items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#6B4A33] to-[#4A3220] px-6 py-3.5 font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-[#FAF9F6] shadow-[0_22px_48px_-12px_rgba(88,60,42,0.42),inset_0_1px_0_rgba(255,255,255,0.18)] transition-shadow duration-500 hover:shadow-[0_28px_56px_-12px_rgba(88,60,42,0.55),inset_0_1px_0_rgba(255,255,255,0.18)]"
          >
            <span className="relative z-[1]">{phoneLabel}</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
