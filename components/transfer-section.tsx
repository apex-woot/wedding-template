"use client"

import { motion } from "framer-motion"

function TransferIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-auto w-16 md:w-20" fill="none">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 40h52" strokeWidth="1.4" />
        <path d="M10 40V24a2 2 0 0 1 2-2h24a2 2 0 0 1 2 1l6 9h8a2 2 0 0 1 2 2v6" strokeWidth="1.4" />
        <circle cx="18" cy="44" r="4" strokeWidth="1.4" />
        <circle cx="46" cy="44" r="4" strokeWidth="1.4" />
        <path d="M22 40h20" strokeWidth="1" />
        <path d="M38 28v4h10" strokeWidth="1.2" />
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

export function TransferSection() {
  return (
    <section
      aria-labelledby="transfer-title"
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
          <TransferIcon />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          id="transfer-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#8FACC2]"
        >
          Трансфер
        </motion.h2>

        <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-[34rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#4E5D72]">
          Буде організовано трансфер від костелу святої Анни у Львові до
          ресторану та назад до Львова після святкування.
        </motion.p>

        <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-[34rem] text-balance font-sans text-[clamp(0.98rem,2.4vw,1.08rem)] leading-[1.8] text-[#8B8478]">
          Якщо ви захочете залишитися довше й не повертатися того ж вечора,
          перегляньте розділ проживання, щоб забронювати номер у Yavir Resort.
        </motion.p>
      </motion.div>
    </section>
  )
}
