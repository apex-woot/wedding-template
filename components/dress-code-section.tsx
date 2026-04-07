"use client"

import { motion } from "framer-motion"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const dressCodeColors = [
  { hex: "#8FACC2", name: "небесний" },
  { hex: "#364274", name: "темно-синій" },
  { hex: "#583C2A", name: "теплий брунатний" },
  { hex: "#A8BCA1", name: "шавлія" },
  { hex: "#F7F6F2", name: "слонова кість" },
] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
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

const swatchVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutExpo },
  },
}

export function DressCodeSection() {
  return (
    <section
      id="dress-code"
      aria-labelledby="dress-code-title"
      className="min-h-[max(60svh,480px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(88,60,42,0.07),transparent_24%),radial-gradient(circle_at_82%_72%,rgba(168,188,161,0.18),transparent_32%),radial-gradient(circle_at_50%_50%,rgba(143,172,194,0.06),transparent_60%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-gradient-to-b from-white/95 to-[#FCFBF8]/80 backdrop-blur-md px-4 pt-9 pb-12 text-center shadow-[0_30px_80px_-20px_rgba(88,60,42,0.16)] ring-1 ring-white/60 md:px-8 md:pt-12 md:pb-14"
      >
        <motion.p
          variants={itemVariants}
          className="font-sans text-[0.62rem] md:text-[0.7rem] font-medium uppercase tracking-[0.5em] text-[#583C2A]/45 mb-3"
        >
          палітра вечора
        </motion.p>

        <motion.h2
          variants={itemVariants}
          id="dress-code-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#364274]"
        >
          Дрес-код
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-[28rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.85] font-light text-[#583C2A]"
        >
          Ми будемо вдячні, якщо ви підтримаєте атмосферу свята та оберете вбрання у відповідній кольоровій гамі
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-nowrap items-start justify-center gap-3 md:mt-12 md:gap-5"
        >
          {dressCodeColors.map(({ hex, name }) => (
            <motion.div
              key={hex}
              variants={swatchVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: easeOutExpo }}
              className="group relative grid justify-items-center cursor-default"
            >
              <motion.span
                className="block size-14 rounded-full ring-1 ring-white/70 shadow-[inset_0_2px_0_rgba(255,255,255,0.55),0_18px_36px_-8px_rgba(88,60,42,0.18)] md:size-16 transition-shadow duration-500 group-hover:shadow-[inset_0_2px_0_rgba(255,255,255,0.55),0_28px_50px_-8px_rgba(88,60,42,0.32)]"
                style={{ backgroundColor: hex }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
              />
              <span className="mt-3 font-sans text-[0.55rem] md:text-[0.62rem] font-medium uppercase tracking-[0.18em] text-[#583C2A]/45 opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
