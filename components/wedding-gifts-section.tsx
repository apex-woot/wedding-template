"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { LuGift } from "react-icons/lu"

function GiftIcon() {
  return <LuGift aria-hidden="true" className="h-auto w-16 md:w-20" strokeWidth={1.2} />
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
      className="relative overflow-hidden px-4 py-[clamp(3.5rem,8vw,6rem)] min-h-[max(100svh,720px)]"
    >
      <div className="absolute inset-0">
        <Image
          src="/IMG_8383.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,37,32,0.3)_0%,rgba(42,37,32,0.55)_50%,rgba(42,37,32,0.4)_100%)]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[46rem] text-center flex flex-col items-center justify-center min-h-[inherit]"
      >
        <motion.div variants={itemVariants} className="mx-auto mb-6 text-white/60">
          <GiftIcon />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          id="wedding-gifts-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-white"
        >
          Наші побажання
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
