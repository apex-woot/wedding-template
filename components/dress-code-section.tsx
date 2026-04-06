"use client"

import { motion } from "framer-motion"

const dressCodeColors = [
  "#8FACC2",
  "#364274",
  "#583C2A",
  "#A8BCA1",
  "#F7F6F2",
] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

const swatchVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
}

export function DressCodeSection() {
  return (
    <section
      id="dress-code"
      aria-labelledby="dress-code-title"
      className="min-h-[max(60svh,480px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(88,60,42,0.06),transparent_22%),radial-gradient(circle_at_86%_72%,rgba(168,188,161,0.15),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-[#FCFBF8]/90 px-4 pt-9 pb-10 text-center shadow-[0_24px_70px_rgba(88,60,42,0.1)] ring-1 ring-white/60 md:px-8 md:pt-12 md:pb-14"
      >
        <motion.h2
          variants={itemVariants}
          id="dress-code-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#364274]"
        >
          Дрес-код
        </motion.h2>

        <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-[28rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#583C2A]">
          Ми будемо вдячні, якщо ви підтримаєте атмосферу свята та оберете вбрання у відповідній кольоровій гамі
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-nowrap items-start justify-center gap-3 md:mt-10 md:gap-5"
        >
          {dressCodeColors.map((color) => (
            <motion.div
              key={color}
              variants={swatchVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid justify-items-center cursor-default"
            >
              <motion.span
                className="block size-14 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_14px_30px_rgba(88,60,42,0.12)] ring-1 ring-white/60 md:size-16 transition-shadow duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_20px_40px_rgba(88,60,42,0.2)]"
                style={{ backgroundColor: color }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
