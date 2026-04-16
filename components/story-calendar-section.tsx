"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import dynamic from "next/dynamic"
import { useRef } from "react"
import { useTranslation } from "@/components/i18n-provider"

const OrbitingRings = dynamic(
  () => import("./orbiting-rings").then((m) => m.OrbitingRings),
  { ssr: false }
)

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const weeks = [
  [null, null, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, null, null],
]

const calendarRowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
}

const calendarCellVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
}

export function StoryCalendarSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"])

  return (
    <section
      ref={ref}
      id="date"
      aria-labelledby="date-story-title"
      className="min-h-[max(100svh,720px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(143,172,194,0.12),transparent_36%),radial-gradient(circle_at_80%_70%,rgba(168,188,161,0.13),transparent_38%)]" />

      <div className="relative z-[1] mx-auto max-w-[56rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <p className="font-sans text-[0.62rem] font-medium uppercase tracking-[0.55em] text-[#583C2A]/45 md:text-[0.72rem]">
            {t.story.kicker}
          </p>
        </motion.div>

        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: easeOutExpo }}
          viewport={{ once: true, margin: "-60px" }}
          className="relative mx-auto mt-6 flex items-center justify-center will-change-transform"
        >
          <div className="relative h-[clamp(13rem,38vw,22rem)] w-[clamp(13rem,38vw,22rem)] md:h-[30rem] md:w-[30rem]">
            <OrbitingRings className="absolute inset-[-12%]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.span
                initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.4, delay: 0.5, ease: easeOutExpo }}
                viewport={{ once: true }}
                className="font-display text-[clamp(7.5rem,24vw,14rem)] md:text-[19rem] leading-[0.75] font-medium tracking-[-0.06em] text-[#583C2A]"
                style={{
                  textShadow:
                    "0 30px 60px rgba(88,60,42,0.18), 0 0 1px rgba(88,60,42,0.4)",
                }}
              >
                11
              </motion.span>
              <motion.span
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
                transition={{ duration: 1.2, delay: 0.9 }}
                viewport={{ once: true }}
                className="mt-1 font-sans text-[clamp(0.7rem,2vw,0.9rem)] md:text-[1.2rem] font-medium uppercase text-[#583C2A]/45"
              >
                {t.story.month}
              </motion.span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: easeOutExpo }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-[32rem] text-center"
        >
          <h2
            id="date-story-title"
            className="font-display text-[clamp(1.5rem,4.2vw,2.4rem)] leading-[1.2] font-medium tracking-[-0.012em] text-[#583C2A]"
          >
            {t.story.titleL1}
            <br />
            <span className="italic text-[#364274]">{t.story.titleL2}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 56, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: easeOutExpo }}
          viewport={{ once: true }}
          className="mx-auto mt-6 h-[1px] bg-gradient-to-r from-transparent via-[#583C2A]/35 to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: easeOutExpo }}
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mt-8 max-w-[22rem] md:mt-12 md:max-w-[34rem]"
          role="img"
          aria-label={t.story.aria}
        >
          <div className="grid grid-cols-7 gap-x-1 mb-3">
            {t.story.days.map((day) => (
              <span
                key={day}
                className="text-center font-sans text-[0.58rem] md:text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-[#583C2A]/30"
              >
                {day}
              </span>
            ))}
          </div>

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
                      whileHover={isWeddingDay ? undefined : { scale: 1.18, y: -2 }}
                      transition={{ duration: 0.3, ease: easeOutExpo }}
                      className={`grid h-[2.2rem] md:h-[3.4rem] place-items-center rounded-full font-sans text-[0.85rem] md:text-[1.25rem] transition-colors duration-300 ${
                        isWeddingDay
                          ? "bg-gradient-to-br from-[#6B4A33] to-[#583C2A] text-[#FAF9F6] font-semibold text-[0.9rem] md:text-[1.35rem] shadow-[0_8px_30px_rgba(88,60,42,0.4),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-[#583C2A]/30"
                          : "text-[#583C2A] font-light hover:text-[#364274] hover:bg-[#D8DED5]/55"
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
