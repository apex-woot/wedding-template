"use client"

import { motion } from "framer-motion"

function GiftIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-auto w-16 md:w-20" fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="28" width="40" height="24" rx="2" strokeWidth="1.4" />
        <rect x="8" y="22" width="48" height="8" rx="2" strokeWidth="1.4" />
        <path d="M32 22v30" strokeWidth="1.2" />
        <path d="M32 22c-4-8-14-12-14-4s14 4 14 4" strokeWidth="1.2" />
        <path d="M32 22c4-8 14-12 14-4s-14 4-14 4" strokeWidth="1.2" />
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

export function WeddingGiftsSection() {
  return (
    <section
      aria-labelledby="wedding-gifts-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#EDE8E0_0%,#EBE6DD_100%)] px-4 pt-[clamp(4.5rem,10vw,7rem)] pb-[clamp(5rem,12vw,8rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(107,83,57,0.05),transparent_22%),radial-gradient(circle_at_82%_76%,rgba(180,168,150,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-[#FAF7F2]/90 px-5 pt-10 pb-12 text-center shadow-[0_24px_70px_rgba(80,68,52,0.1)] ring-1 ring-white/60 md:px-10 md:pt-14 md:pb-16"
      >
        <motion.div variants={itemVariants} className="mx-auto mb-6 text-[#A09483]">
          <GiftIcon />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          id="wedding-gifts-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#8FACC2]"
        >
          Весільні подарунки
        </motion.h2>

        <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-[32rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#4E5D72]">
          Ваша присутність на нашому весіллі - найбільший подарунок для нас.
          Якщо ви захочете привітати нас подарунком, ми будемо вдячні за внесок
          у наше спільне майбутнє.
        </motion.p>
      </motion.div>
    </section>
  )
}
