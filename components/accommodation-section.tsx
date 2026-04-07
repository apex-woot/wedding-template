"use client"

import { motion } from "framer-motion"
import { LuHotel } from "react-icons/lu"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const bookingUrl =
  "https://www.booking.com/hotel/ua/iavir-rezort.uk.html?chal_t=1772912905071&force_referer="

const phoneHref = "tel:+380685981328"
const phoneLabel = "+38 (068) 598 13 28"

function AccommodationIcon() {
  return <LuHotel aria-hidden="true" className="h-auto w-16 md:w-20" strokeWidth={1.2} />
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
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
        className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-gradient-to-b from-white/95 to-[#FCFBF8]/80 backdrop-blur-md px-5 pt-10 pb-12 text-center shadow-[0_30px_80px_-20px_rgba(88,60,42,0.16)] ring-1 ring-white/60 md:px-10 md:pt-14 md:pb-16"
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
          className="mx-auto mt-5 max-w-[34rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.85] font-light text-[#583C2A]"
        >
          У Yavir Resort доступне бронювання проживання. Ви можете зарезервувати
          номер телефоном або через Booking.com.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-9 flex flex-col items-center justify-center gap-3 md:mt-11 md:flex-row md:gap-4"
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

          <motion.a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="inline-flex min-w-[14rem] items-center justify-center rounded-full border border-[#D8DED5] bg-white/90 backdrop-blur-sm px-6 py-3.5 font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-[#583C2A] shadow-[0_14px_34px_-10px_rgba(88,60,42,0.18)] transition-all duration-500 hover:bg-white hover:shadow-[0_22px_46px_-10px_rgba(88,60,42,0.28)] hover:border-[#A8BCA1]"
          >
            Забронювати на Booking.com
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
