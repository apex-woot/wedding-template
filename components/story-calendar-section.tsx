"use client"

import { motion } from "framer-motion"

const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"]

// July 2026: starts on Wednesday (index 2), 31 days
const weeks = [
  [null, null, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, null, null],
]

function BotanicalStem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 240"
      aria-hidden="true"
      className={`h-auto w-full ${className}`}
      fill="none"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M49 235C48 195 50 161 59 127C65 106 69 85 62 55C58 37 49 20 36 7" strokeWidth="1.3" />
        <path d="M58 123C74 112 85 98 90 82" strokeWidth="0.95" />
        <path d="M55 104C40 94 30 82 25 66" strokeWidth="0.95" />
        <path d="M89 82C79 79 69 82 61 91" strokeWidth="0.85" />
        <path d="M24 66C34 64 43 67 51 76" strokeWidth="0.85" />
      </g>
    </svg>
  )
}

function RingDecoration() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0 h-full w-full" fill="none">
      <circle cx="100" cy="100" r="90" stroke="#8FACC2" strokeWidth="0.5" opacity="0.3" />
      <circle cx="100" cy="100" r="78" stroke="#583C2A" strokeWidth="0.3" opacity="0.2" />
      <circle cx="100" cy="10" r="1.5" fill="#8FACC2" opacity="0.4" />
      <circle cx="190" cy="100" r="1.5" fill="#8FACC2" opacity="0.4" />
      <circle cx="100" cy="190" r="1.5" fill="#8FACC2" opacity="0.4" />
      <circle cx="10" cy="100" r="1.5" fill="#8FACC2" opacity="0.4" />
    </svg>
  )
}

const calendarRowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
}

const calendarCellVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
}

export function StoryCalendarSection() {
  return (
    <section
      id="date"
      aria-labelledby="date-story-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F2EDE5_0%,#EDE8E0_100%)] px-4 pt-[clamp(5rem,12vw,9rem)] pb-[clamp(6rem,14vw,10rem)]"
    >
      {/* Subtle botanicals */}
      <div className="pointer-events-none absolute left-[clamp(0.5rem,3vw,2rem)] top-[12%] w-[min(18vw,8rem)] text-[#A09483]/10">
        <BotanicalStem />
      </div>
      <div className="pointer-events-none absolute right-[clamp(0.5rem,3vw,2rem)] bottom-[10%] w-[min(18vw,8rem)] scale-x-[-1] text-[#A09483]/10">
        <BotanicalStem />
      </div>

      <div className="relative z-[1] mx-auto max-w-[56rem]">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.5em] text-[#583C2A]/40 md:text-[0.72rem]">
            збережіть дату
          </p>
        </motion.div>

        {/* Hero date — the "11" as centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative mx-auto mt-8 flex items-center justify-center"
        >
          {/* Flanking text — left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col items-end gap-1 mr-8 lg:mr-12"
          >
            <span className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal italic text-[#8FACC2]">
              субота
            </span>
            <span className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.4em] text-[#583C2A]/35">
              липень
            </span>
          </motion.div>

          {/* The massive "11" */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[clamp(12rem,35vw,20rem)] w-[clamp(12rem,35vw,20rem)]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <RingDecoration />
              </motion.div>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="font-display text-[clamp(7rem,22vw,13rem)] leading-[0.75] font-medium tracking-[-0.06em] text-[#364274]"
                >
                  11
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-1 font-display text-[clamp(1.8rem,5vw,3rem)] font-normal italic text-[#8FACC2] tracking-[0.02em]"
                >
                  липня
                </motion.span>
              </div>
            </div>
          </div>

          {/* Flanking text — right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:flex flex-col items-start gap-1 ml-8 lg:ml-12"
          >
            <span className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-normal italic text-[#8FACC2]">
              2026
            </span>
            <span className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.4em] text-[#583C2A]/35">
              Львів
            </span>
          </motion.div>
        </motion.div>

        {/* Mobile: show "субота, липень 2026 · Львів" */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-center font-sans text-[0.72rem] font-medium uppercase tracking-[0.35em] text-[#583C2A]/40 md:hidden"
        >
          субота, 2026 &middot; Львів
        </motion.p>

        {/* Emotional text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-[32rem] text-center md:mt-10"
        >
          <h2
            id="date-story-title"
            className="font-display text-[clamp(1.6rem,4.5vw,2.6rem)] leading-[1.15] font-medium tracking-[-0.01em] text-[#364274]"
          >
            У цей день починається
            <br />
            <span className="italic font-normal text-[#8FACC2]">наше назавжди</span>
          </h2>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 h-[1px] bg-[#583C2A]/20"
        />

        {/* Compact calendar grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-10 max-w-[22rem]"
          role="img"
          aria-label="Календар на липень 2026 року, де 11 число виділено як день весілля"
        >
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-x-1 mb-3">
            {daysOfWeek.map((day) => (
              <span
                key={day}
                className="text-center font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#583C2A]/30"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Weeks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            transition={{ staggerChildren: 0.06, delayChildren: 0.3 }}
            className="grid gap-y-1"
          >
            {weeks.map((week, weekIndex) => (
              <motion.div
                key={`week-${weekIndex}`}
                variants={calendarRowVariants}
                className="grid grid-cols-7 gap-x-1"
              >
                {week.map((day, dayIndex) => {
                  const cellKey = `${weekIndex}-${dayIndex}`
                  if (day === null) {
                    return <span key={cellKey} className="h-[2.2rem]" />
                  }

                  const isWeddingDay = day === 11

                  return (
                    <motion.span
                      key={cellKey}
                      variants={calendarCellVariants}
                      whileHover={isWeddingDay ? undefined : { scale: 1.15 }}
                      className={`grid h-[2.2rem] place-items-center rounded-full font-sans text-[0.85rem] transition-colors duration-200 ${
                        isWeddingDay
                          ? "bg-[#364274] text-[#F5F0E8] font-semibold text-[0.9rem] shadow-[0_4px_20px_rgba(54,66,116,0.3)]"
                          : "text-[#4E5D72] font-light hover:text-[#364274] hover:bg-[#E8DCCB]/50"
                      }`}
                    >
                      {day}
                    </motion.span>
                  )
                })}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom signature */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 text-center font-display text-[clamp(1.1rem,3vw,1.5rem)] font-normal italic text-[#583C2A]/30"
        >
          з усією нашою любов&rsquo;ю
        </motion.p>
      </div>
    </section>
  )
}
