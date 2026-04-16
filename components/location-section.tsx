"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { LuNavigation } from "react-icons/lu"
import { useTranslation } from "@/components/i18n-provider"

const easeOutExpo = [0.16, 1, 0.3, 1] as const

const venuePhotoUrl =
  "https://lh3.googleusercontent.com/p/AF1QipOhgidaF-66o5qAGBQdWSngmfA8gYAQGlWm1C5v=w1600-h1067-k-no"

const embeddedMapUrl =
  "https://www.google.com/maps?q=Yavir%20Resort%2C%20Vulytsia%20Bichna%2C%2055A%2C%20Starychi%2C%20Lviv%20Oblast%2C%2081052&output=embed"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: easeOutExpo },
  },
}

export function LocationSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const orbsY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12])

  return (
    <section
      ref={ref}
      id="location"
      aria-labelledby="location-title"
      className="min-h-[max(100svh,720px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <motion.div
        style={{ y: orbsY }}
        className="pointer-events-none absolute inset-0 will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(88,60,42,0.07),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(168,188,161,0.18),transparent_32%),radial-gradient(circle_at_50%_50%,rgba(143,172,194,0.08),transparent_55%)]" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[72rem]"
      >
        <div className="mx-auto max-w-[42rem] text-center">
          <motion.p
            variants={itemVariants}
            className="font-sans text-[0.62rem] md:text-[0.7rem] font-medium uppercase tracking-[0.5em] text-[#583C2A]/45 mb-4"
          >
            {t.location.kicker}
          </motion.p>
          <motion.h2
            variants={itemVariants}
            id="location-title"
            className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#364274]"
          >
            {t.location.title}
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mt-5 flex items-center justify-center gap-3"
          >
            <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#583C2A]/40" />
            <p className="font-sans text-[0.78rem] md:text-[0.95rem] font-medium tracking-[0.2em] text-[#583C2A] uppercase">
              {t.location.venue}
            </p>
            <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#583C2A]/40" />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-balance font-sans text-[clamp(1rem,2.4vw,1.1rem)] leading-[1.85] font-light text-[#583C2A]"
          >
            {t.location.desc}
          </motion.p>
        </div>

        <div className="mt-12 lg:mt-16 grid gap-6">
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/90 to-[#FCFBF8]/70 p-2 shadow-[0_30px_80px_-20px_rgba(88,60,42,0.18)] ring-1 ring-white/70 transition-shadow duration-700 hover:shadow-[0_40px_100px_-20px_rgba(88,60,42,0.28)]"
          >
            <div className="overflow-hidden rounded-[1.4rem] bg-[#D8DED5]">
              <motion.div
                style={{ scale: photoScale }}
                className="relative block aspect-[1600/1067] w-full md:max-h-[70svh] will-change-transform"
              >
                <Image
                  src={venuePhotoUrl}
                  alt={t.location.venue}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/90 to-[#FCFBF8]/70 p-2 shadow-[0_30px_80px_-20px_rgba(88,60,42,0.18)] ring-1 ring-white/70 transition-shadow duration-700 hover:shadow-[0_40px_100px_-20px_rgba(88,60,42,0.28)]"
          >
            <div className="relative overflow-hidden rounded-[1.4rem] bg-[#D8DED5]">
              <iframe
                title={t.location.mapTitle}
                src={embeddedMapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[24rem] w-full border-0 md:h-[32rem]"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(247,246,242,0.92)_100%)] px-5 pt-12 pb-5">
                <motion.a
                  href="https://maps.google.com/?q=Yavir+Resort+Starychi+Lviv"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full bg-[#FCFBF8]/95 backdrop-blur-md px-4 py-2.5 shadow-[0_18px_40px_rgba(88,60,42,0.18)] ring-1 ring-[#D8DED5] hover:shadow-[0_24px_50px_rgba(88,60,42,0.25)] transition-shadow duration-500"
                >
                  <LuNavigation
                    aria-hidden="true"
                    className="size-4 text-[#583C2A]"
                  />
                  <span className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-[#364274]">
                    Yavir Resort
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
