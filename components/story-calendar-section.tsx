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

function RingDecoration() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="absolute inset-0 h-full w-full" fill="none">
      <circle cx="100" cy="100" r="90" stroke="#583C2A" strokeWidth="0.5" opacity="0.2" />
      <circle cx="100" cy="100" r="78" stroke="#583C2A" strokeWidth="0.3" opacity="0.15" />
      <circle cx="100" cy="10" r="1.5" fill="#583C2A" opacity="0.25" />
      <circle cx="190" cy="100" r="1.5" fill="#583C2A" opacity="0.25" />
      <circle cx="100" cy="190" r="1.5" fill="#583C2A" opacity="0.25" />
      <circle cx="10" cy="100" r="1.5" fill="#583C2A" opacity="0.25" />
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
      className="min-h-[max(100svh,720px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
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
          className="relative mx-auto mt-6 flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            <div className="relative h-[clamp(12rem,35vw,20rem)] w-[clamp(12rem,35vw,20rem)] md:h-[28rem] md:w-[28rem]">
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
                  className="font-display text-[clamp(7rem,22vw,13rem)] md:text-[18rem] leading-[0.75] font-medium tracking-[-0.06em] text-[#583C2A]"
                >
                  11
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-1 font-sans text-[clamp(0.7rem,2vw,0.9rem)] md:text-[1.2rem] font-medium uppercase tracking-[0.4em] text-[#583C2A]/40"
                >
                  липня
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emotional text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-[32rem] text-center"
        >
          <h2
            id="date-story-title"
            className="font-display text-[clamp(1.4rem,4vw,2.2rem)] leading-[1.2] font-medium tracking-[-0.01em] text-[#583C2A]"
          >
            В цей день починається
            <br />
            наше назавжди
          </h2>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 h-[1px] bg-[#583C2A]/20"
        />

        {/* Compact calendar grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-8 max-w-[22rem] md:mt-12 md:max-w-[34rem]"
          role="img"
          aria-label="Календар на липень 2026 року, де 11 число виділено як день весілля"
        >
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-x-1 mb-3">
            {daysOfWeek.map((day) => (
              <span
                key={day}
                className="text-center font-sans text-[0.58rem] md:text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-[#583C2A]/30"
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
                  if (day === null)
                    return <span key={cellKey} className="h-[2.2rem] md:h-[3.4rem]" />

                  const isWeddingDay = day === 11

                  return (
                    <motion.span
                      key={cellKey}
                      variants={calendarCellVariants}
                      whileHover={isWeddingDay ? undefined : { scale: 1.15 }}
                      className={`grid h-[2.2rem] md:h-[3.4rem] place-items-center rounded-full font-sans text-[0.85rem] md:text-[1.25rem] transition-colors duration-200 ${
                        isWeddingDay
                          ? "bg-[#583C2A] text-[#FAF9F6] font-semibold text-[0.9rem] md:text-[1.35rem] shadow-[0_4px_20px_rgba(88,60,42,0.3)]"
                          : "text-[#583C2A] font-light hover:text-[#583C2A] hover:bg-[#D8DED5]/50"
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
      </div>
    </section>
  )
}
