"use client"

import Image from "next/image"
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
      className="relative overflow-hidden px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/IMG_8383.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-[#2A2520]/40" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[46rem] text-center"
      >
        <motion.div variants={itemVariants} className="mx-auto mb-6 text-white/60">
          <GiftIcon />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          id="wedding-gifts-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-white"
        >
          Весільні подарунки
        </motion.h2>

        <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-[32rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-white/80">
          Для нас найважливіше — це розділити з вами радість нашого дня.
        </motion.p>

        <motion.p variants={itemVariants} className="mx-auto mt-4 max-w-[32rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-white/80">
          Якщо ви хочете нас підтримати, будемо раді грошовому подарунку, який допоможе здійснити наші спільні мрії.
        </motion.p>
      </motion.div>
    </section>
  )
}
