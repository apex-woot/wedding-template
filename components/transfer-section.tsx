"use client"

import { motion } from "framer-motion"
import { LuBusFront } from "react-icons/lu"
import { useTranslation } from "@/components/i18n-provider"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

function TransferIcon() {
  return <LuBusFront aria-hidden="true" className="h-auto w-16 md:w-20" strokeWidth={1.2} />
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

export function TransferSection() {
  const { t } = useTranslation()
  return (
    <section
      aria-labelledby="transfer-title"
      className="min-h-[max(60svh,480px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(88,60,42,0.06),transparent_24%),radial-gradient(circle_at_82%_76%,rgba(168,188,161,0.16),transparent_30%),radial-gradient(circle_at_50%_50%,rgba(143,172,194,0.06),transparent_60%)]" />

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
          <TransferIcon />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-sans text-[0.62rem] md:text-[0.7rem] font-medium uppercase tracking-[0.5em] text-[#583C2A]/45 mb-3"
        >
          {t.transfer.kicker}
        </motion.p>

        <motion.h2
          variants={itemVariants}
          id="transfer-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#364274]"
        >
          {t.transfer.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-[34rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.85] font-light text-[#583C2A]"
        >
          {t.transfer.desc}
        </motion.p>
      </motion.div>
    </section>
  )
}
