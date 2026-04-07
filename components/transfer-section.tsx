"use client"

import { motion } from "framer-motion"
import { LuBusFront } from "react-icons/lu"

function TransferIcon() {
  return <LuBusFront aria-hidden="true" className="h-auto w-16 md:w-20" strokeWidth={1.2} />
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
      className="min-h-[max(60svh,480px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(88,60,42,0.05),transparent_22%),radial-gradient(circle_at_82%_76%,rgba(168,188,161,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-[#FCFBF8]/90 px-5 pt-10 pb-12 text-center shadow-[0_24px_70px_rgba(88,60,42,0.1)] ring-1 ring-white/60 md:px-10 md:pt-14 md:pb-16"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center text-[#A8BCA1]">
          <TransferIcon />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          id="transfer-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#364274]"
        >
          Трансфер
        </motion.h2>

        <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-[34rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#583C2A]">
          Буде організовано трансфер від церкви Святої Анни до ресторану та назад до Львова після святкування.
        </motion.p>
      </motion.div>
    </section>
  )
}
