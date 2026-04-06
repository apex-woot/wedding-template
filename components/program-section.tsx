"use client"

import { motion } from "framer-motion"

const programItems = [
  {
    time: "11:30",
    title: "Шлюб",
    details: "Церква Святої Анни, вул. Городоцька, 32",
    icon: "rings",
  },
  {
    time: "14:00",
    title: "Прибуття гостей до локації",
    details: "",
    icon: "pin",
  },
  {
    time: "15:30",
    title: "Церемонія",
    details: "",
    icon: "camera",
  },
  {
    time: "16:00",
    title: "Святковий банкет",
    details: "",
    icon: "glasses",
  },
  {
    time: "19:00",
    title: "Весільний торт",
    details: "",
    icon: "cake",
  },
] as const

function ProgramIcon({
  icon,
}: {
  icon: (typeof programItems)[number]["icon"]
}) {
  if (icon === "pin") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-auto w-[4.5rem]" fill="none">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 52c10-14 14-21 14-29a14 14 0 1 0-28 0c0 8 4 15 14 29Z" strokeWidth="1.7" />
          <circle cx="32" cy="24" r="5" strokeWidth="1.5" />
          <path d="M16 50c4-4 10-6 16-6s12 2 16 6" strokeWidth="1.2" />
        </g>
      </svg>
    )
  }
  if (icon === "rings") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-auto w-[4.5rem]" fill="none">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="25" cy="36" r="11" strokeWidth="1.7" />
          <circle cx="39" cy="32" r="11" strokeWidth="1.7" />
          <path d="M35 20l4-7l5 4l-5 5" strokeWidth="1.1" />
        </g>
      </svg>
    )
  }
  if (icon === "camera") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-auto w-[4.75rem]" fill="none">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="20" width="44" height="28" rx="3" strokeWidth="1.6" />
          <circle cx="32" cy="34" r="9" strokeWidth="1.5" />
          <path d="M19 20l4-6h18l4 6" strokeWidth="1.3" />
          <path d="M45 26h4" strokeWidth="1.2" />
        </g>
      </svg>
    )
  }
  if (icon === "glasses") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true" className="h-auto w-[4.5rem]" fill="none">
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 12h10v9c0 5-2 9-5 9s-5-4-5-9z" strokeWidth="1.5" />
          <path d="M36 10h10v12c0 5-2 8-5 8s-5-3-5-8z" strokeWidth="1.5" />
          <path d="M23 30v14" strokeWidth="1.3" />
          <path d="M41 30v14" strokeWidth="1.3" />
          <path d="M18 48h10" strokeWidth="1.3" />
          <path d="M36 48h10" strokeWidth="1.3" />
          <path d="M28 20c2 1 4 3 4 6c0-3 2-5 4-6" strokeWidth="1.1" />
        </g>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-auto w-[4.75rem]" fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 48h28a4 4 0 0 0 4-4V34H14v10a4 4 0 0 0 4 4Z" strokeWidth="1.6" />
        <path d="M22 34v-8a10 10 0 0 1 20 0v8" strokeWidth="1.3" />
        <path d="M25 22h14" strokeWidth="1.2" />
        <path d="M32 14c3 0 5 2 5 5h-10c0-3 2-5 5-5Z" strokeWidth="1.2" />
        <path d="M12 48c-3 0-6 2-8 5" strokeWidth="1.1" />
        <path d="M52 48c3 0 6 2 8 5" strokeWidth="1.1" />
      </g>
    </svg>
  )
}

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

export function ProgramSection() {
  return (
    <section
      id="program"
      aria-labelledby="program-title"
      className="min-h-[max(100svh,720px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(8rem,20svh,14rem)] bg-[linear-gradient(180deg,rgba(247,246,242,0.96)_0%,rgba(247,246,242,0.72)_30%,rgba(247,246,242,0.22)_66%,rgba(247,246,242,0)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-[1] mx-auto w-full max-w-[44rem] rounded-[2rem] bg-[#FCFBF8]/95 px-5 pt-10 pb-12 shadow-[0_24px_70px_rgba(88,60,42,0.1)] ring-1 ring-white/50 md:px-10 md:pt-14 md:pb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="program-title"
          className="m-0 text-center font-display text-[clamp(2.9rem,8vw,4.8rem)] uppercase tracking-[0.08em] text-[#364274]"
        >
          Програма
        </motion.h2>

        <div className="relative mt-10 md:mt-14">
          <div className="absolute top-2 bottom-6 left-[calc(5.25rem+0.625rem)] w-px bg-[#D8DED5] md:left-1/2 md:-translate-x-1/2" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
            className="grid gap-10 md:gap-12"
          >
            {programItems.map((item) => (
              <motion.article
                key={item.time}
                variants={timelineItemVariants}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-[5.25rem_1.25rem_1fr] items-center gap-x-4 md:grid-cols-[1fr_2.5rem_1fr] md:gap-x-8 group cursor-default"
              >
                <motion.div className="flex justify-center text-[#8FACC2] md:justify-end md:pr-4 transition-colors duration-300 group-hover:text-[#583C2A]">
                  <ProgramIcon icon={item.icon} />
                </motion.div>

                <div className="relative flex h-full justify-center">
                  <span className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#8FACC2] shadow-[0_0_0_8px_rgba(250,250,247,0.95)] transition-all duration-300 group-hover:bg-[#583C2A] group-hover:scale-125 group-hover:shadow-[0_0_0_8px_rgba(88,60,42,0.1)]" />
                </div>

                <div className="text-left md:pl-4">
                  <p className="m-0 font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-none font-normal italic text-[#583C2A]/50 transition-colors duration-300 group-hover:text-[#364274]">
                    {item.time}
                  </p>
                  <h3 className="mt-2 mb-0 font-sans text-[1.2rem] leading-[1.35] font-light text-[#364274] md:text-[1.45rem]">
                    {item.title}
                  </h3>
                  {item.details && (
                    <p className="mt-1 mb-0 max-w-[22ch] font-sans text-[0.95rem] leading-[1.5] text-[#8FACC2] md:text-[1rem]">
                      {item.details}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
