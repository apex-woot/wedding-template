"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { LuGift } from "react-icons/lu"
import { useTranslation } from "@/components/i18n-provider"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

function GiftIcon() {
  return <LuGift aria-hidden="true" className="h-auto w-16 md:w-20" strokeWidth={1.2} />
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: easeOutExpo },
  },
}

export function WeddingGiftsSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18])

  return (
    <section
      ref={ref}
      aria-labelledby="wedding-gifts-title"
      className="relative overflow-hidden px-4 py-[clamp(3.5rem,8vw,6rem)] min-h-[max(100svh,720px)]"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 will-change-transform">
        <Image
          src="/IMG_8383.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(42,37,32,0.4)_0%,rgba(42,37,32,0.6)_50%,rgba(42,37,32,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,transparent_30%,rgba(42,37,32,0.5)_100%)]" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[46rem] text-center flex flex-col items-center justify-center min-h-[inherit]"
      >
        <motion.div variants={itemVariants} className="mx-auto mb-6 text-white/65">
          <GiftIcon />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-sans text-[0.62rem] md:text-[0.7rem] font-medium uppercase tracking-[0.5em] text-white/55 mb-4"
        >
          {t.gifts.kicker}
        </motion.p>

        <motion.h2
          variants={itemVariants}
          id="wedding-gifts-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-white [text-shadow:0_4px_40px_rgba(0,0,0,0.3)]"
        >
          {t.gifts.title}
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mt-6 h-[1px] w-12 bg-gradient-to-r from-transparent via-white/45 to-transparent"
        />

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-[32rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.14rem)] leading-[1.85] font-light text-white/85"
        >
          {t.gifts.p1}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-4 max-w-[32rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.14rem)] leading-[1.85] font-light text-white/85"
        >
          {t.gifts.p2}
        </motion.p>
      </motion.div>
    </section>
  )
}
