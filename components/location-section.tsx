"use client"

import { motion } from "framer-motion"
import { LuNavigation } from "react-icons/lu"

const venuePhotoUrl =
  "https://lh3.googleusercontent.com/p/AF1QipOhgidaF-66o5qAGBQdWSngmfA8gYAQGlWm1C5v=w1600-h1067-k-no"

const embeddedMapUrl =
  "https://www.google.com/maps?q=Yavir%20Resort%2C%20Vulytsia%20Bichna%2C%2055A%2C%20Starychi%2C%20Lviv%20Oblast%2C%2081052&output=embed"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
}

export function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-title"
      className="min-h-[max(100svh,720px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(3.5rem,8vw,6rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(88,60,42,0.06),transparent_24%),radial-gradient(circle_at_88%_78%,rgba(168,188,161,0.15),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="relative z-[1] mx-auto max-w-[72rem]"
      >
        <div className="mx-auto max-w-[42rem] text-center">
          <motion.h2
            variants={itemVariants}
            id="location-title"
            className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-medium tracking-[-0.03em] text-[#364274]"
          >
            Локація
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 font-sans text-[clamp(0.85rem,2.2vw,1.05rem)] font-medium tracking-[0.12em] text-[#583C2A] uppercase">
            Явір Резорт
          </motion.p>
          <motion.p variants={itemVariants} className="mt-4 text-balance font-sans text-[clamp(1rem,2.4vw,1.1rem)] leading-[1.8] text-[#583C2A]">
            Церемонія відбудеться в церкві Святої Анни у Львові, а святкування
            продовжиться в Явір Резорт.
          </motion.p>
        </div>

        <div className="mt-10 lg:mt-14">
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-6 overflow-hidden rounded-[2rem] bg-[#FCFBF8]/75 p-2 shadow-[0_24px_70px_rgba(88,60,42,0.1)] ring-1 ring-white/60 transition-shadow duration-500 hover:shadow-[0_32px_80px_rgba(88,60,42,0.18)]"
          >
            <div className="overflow-hidden rounded-[1.4rem] bg-[#D8DED5]">
              <img
                src={venuePhotoUrl}
                alt="Yavir Resort"
                className="block w-full object-contain md:max-h-[70svh] transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-[2rem] bg-[#FCFBF8]/75 p-2 shadow-[0_24px_70px_rgba(88,60,42,0.1)] ring-1 ring-white/60"
          >
            <div className="relative overflow-hidden rounded-[1.4rem] bg-[#D8DED5]">
              <iframe
                title="Маршрут на Google Maps до Yavir Resort"
                src={embeddedMapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[24rem] w-full border-0 md:h-[32rem]"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(247,246,242,0.88)_100%)] px-5 pt-10 pb-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#FCFBF8]/92 px-3 py-2 shadow-[0_12px_30px_rgba(88,60,42,0.12)] ring-1 ring-[#D8DED5]"
                >
                  <LuNavigation aria-hidden="true" className="size-4 text-[#583C2A]" />
                  <span className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-[#364274]">
                    Yavir Resort
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
