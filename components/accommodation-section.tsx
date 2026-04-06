"use client"

import { motion } from "framer-motion"

const bookingUrl =
  "https://www.booking.com/hotel/ua/iavir-rezort.uk.html?chal_t=1772912905071&force_referer="

const phoneHref = "tel:+380685981328"
const phoneLabel = "+38 (068) 598 13 28"

function AccommodationIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-auto w-16 md:w-20" fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 52V16a2 2 0 0 1 2-2h44a2 2 0 0 1 2 2v36" strokeWidth="1.4" />
        <path d="M4 52h56" strokeWidth="1.4" />
        <rect x="24" y="36" width="16" height="16" rx="1" strokeWidth="1.2" />
        <path d="M32 36v16" strokeWidth="0.8" />
        <rect x="18" y="20" width="8" height="8" rx="1" strokeWidth="1.1" />
        <rect x="38" y="20" width="8" height="8" rx="1" strokeWidth="1.1" />
      </g>
    </svg>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

export function AccommodationSection() {
  return (
    <section
      aria-labelledby="accommodation-title"
      className="min-h-[max(60svh,480px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(88,60,42,0.04),transparent_22%),radial-gradient(circle_at_84%_72%,rgba(168,188,161,0.1),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-[#FCFBF8]/90 px-5 pt-10 pb-12 text-center shadow-[0_24px_70px_rgba(88,60,42,0.1)] ring-1 ring-white/60 md:px-10 md:pt-14 md:pb-16"
      >
        <motion.div variants={itemVariants} className="mx-auto mb-6 text-[#A8BCA1]">
          <AccommodationIcon />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          id="accommodation-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#364274]"
        >
          Проживання
        </motion.h2>

        <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-[34rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#583C2A]">
          У Yavir Resort доступне бронювання проживання. Ви можете зарезервувати
          номер телефоном або через Booking.com.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center justify-center gap-3 md:mt-10 md:flex-row md:gap-4">
          <motion.a
            href={phoneHref}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex min-w-[14rem] items-center justify-center rounded-full bg-[#583C2A] px-6 py-3.5 font-sans text-[0.8rem] font-medium uppercase tracking-[0.18em] text-[#FAF9F6] shadow-[0_18px_40px_rgba(88,60,42,0.25)] transition-colors duration-300 hover:bg-[#6B4E38]"
          >
            {phoneLabel}
          </motion.a>

          <motion.a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex min-w-[14rem] items-center justify-center rounded-full border border-[#D8DED5] bg-white px-6 py-3.5 font-sans text-[0.8rem] font-medium uppercase tracking-[0.18em] text-[#583C2A] shadow-[0_12px_30px_rgba(88,60,42,0.08)] transition-colors duration-300 hover:bg-[#FCFBF8]"
          >
            Забронювати на Booking.com
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
