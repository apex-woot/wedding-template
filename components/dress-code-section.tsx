"use client"

import { motion } from "framer-motion"

const dressCodeColors = [
  { name: "Пильний блакитний", value: "#8FACC2" },
  { name: "Глибокий синій", value: "#364274" },
  { name: "Земляний коричневий", value: "#583C2A" },
  { name: "Шавлієвий зелений", value: "#A8BCA1" },
  { name: "Теплий беж", value: "#E8DCCB" },
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#EBE6DD_0%,#EDE8E0_100%)] px-4 pt-[clamp(4.5rem,10vw,7rem)] pb-[clamp(5rem,12vw,8rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(107,83,57,0.06),transparent_22%),radial-gradient(circle_at_86%_72%,rgba(180,168,150,0.15),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-[#FAF7F2]/90 px-4 pt-9 pb-10 text-center shadow-[0_24px_70px_rgba(80,68,52,0.1)] ring-1 ring-white/60 md:px-8 md:pt-12 md:pb-14"
      >
        <motion.h2
          variants={itemVariants}
          id="dress-code-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#8FACC2]"
        >
          Дрес-код
        </motion.h2>

        <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-[28rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#4E5D72]">
          Нам буде дуже приємно бачити гостей у ніжній, елегантній кольоровій
          палітрі.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-nowrap items-start justify-center gap-3 md:mt-10 md:gap-5"
        >
          {dressCodeColors.map((color) => (
            <motion.div
              key={color.name}
              variants={swatchVariants}
              whileHover={{ y: -6, scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid w-16 justify-items-center gap-2 md:w-20 cursor-default"
            >
              <motion.span
                title={color.name}
                className="block size-14 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_14px_30px_rgba(80,68,52,0.12)] ring-1 ring-white/60 md:size-16 transition-shadow duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_20px_40px_rgba(80,68,52,0.2)]"
                style={{ backgroundColor: color.value }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-center font-sans text-[0.58rem] font-medium uppercase tracking-[0.14em] text-[#8B8478] md:text-[0.65rem]">
                {color.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
