"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { useTranslation } from "@/components/i18n-provider"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeOutExpo },
  },
}

export function InvitationSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const photoY = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"])
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <section
      ref={ref}
      id="invitation"
      aria-labelledby="invitation-title"
      className="min-h-[max(100svh,720px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(4rem,10svh,7rem)]"
    >
      <motion.div
        style={{ y: orbY }}
        className="pointer-events-none absolute inset-0 will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(88,60,42,0.07),transparent_38%),radial-gradient(circle_at_15%_72%,rgba(168,188,161,0.14),transparent_32%),radial-gradient(circle_at_85%_45%,rgba(143,172,194,0.1),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0))]" />
      </motion.div>

      <div className="relative z-1 w-full max-w-200 mx-auto px-[1.2rem] md:px-[1.6rem]">
        <article className="grid justify-items-center">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: easeOutExpo }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-2 grid aspect-[0.7] w-full max-w-[24rem] md:max-w-lg md:max-h-[80svh] place-items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
              className="relative h-full w-full overflow-hidden rounded-t-[50%] rounded-b-md bg-[#D8DED5] shadow-[0_40px_80px_-20px_rgba(88,60,42,0.35)] ring-1 ring-white/40"
            >
              <motion.div style={{ y: photoY }} className="relative w-full h-full will-change-transform">
                <Image
                  quality={100}
                  src="/IMG_8335.JPG"
                  alt={t.invitation.photoAlt}
                  fill
                  sizes="(max-width: 768px) 88vw, 512px"
                  className="object-cover object-center scale-[1.15] filter-[grayscale(0.1)_saturate(0.9)_contrast(1.05)_brightness(1.02)]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_30%,rgba(88,60,42,0.18)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,transparent_55%,rgba(88,60,42,0.18)_100%)]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative w-full max-w-[32rem]"
          >
            <div className="relative z-[1] grid justify-items-center gap-6 text-center px-4">
              <motion.div
                variants={itemVariants}
                className="font-sans text-[0.62rem] md:text-[0.7rem] font-medium uppercase tracking-[0.5em] text-[#583C2A]/45"
              >
                {t.invitation.kicker}
              </motion.div>

              <motion.h2
                variants={itemVariants}
                id="invitation-title"
                className="m-0 font-display text-[clamp(2.6rem,7.5vw,3.8rem)] leading-[0.96] font-medium tracking-[-0.025em] text-[#364274]"
              >
                {t.invitation.title}
              </motion.h2>

              <div className="space-y-5">
                <motion.p
                  variants={itemVariants}
                  className="m-0 max-w-[28ch] mx-auto text-balance font-sans text-[clamp(1.05rem,2.5vw,1.2rem)] leading-[1.85] font-light text-[#583C2A]"
                >
                  {t.invitation.p1}
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="m-0 max-w-[28ch] mx-auto text-balance font-sans text-[clamp(1.05rem,2.5vw,1.2rem)] leading-[1.85] font-light text-[#583C2A]"
                >
                  {t.invitation.p2}
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-4 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#583C2A]/40 to-transparent"
              />
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  )
}
