"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function InvitationSection() {
  return (
    <section
      id="invitation"
      aria-labelledby="invitation-title"
      className="min-h-[max(100svh,720px)] relative overflow-hidden bg-[#F7F6F2] px-4 py-[clamp(4rem,10svh,7rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(88,60,42,0.06),transparent_35%),radial-gradient(circle_at_15%_72%,rgba(168,188,161,0.1),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.05))]" />

      <div className="relative z-1 w-full max-w-200 mx-auto px-[1.2rem] md:px-[1.6rem]">
        <article className="grid justify-items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-2 grid aspect-[0.7] w-full max-w-[24rem] md:max-w-lg md:max-h-[80svh] place-items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-full w-full overflow-hidden rounded-t-[50%] rounded-b-md bg-[#D8DED5] shadow-[0_30px_60px_-15px_rgba(88,60,42,0.3)]"
            >
              <motion.div
                whileInView={{ scale: 1.05 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                className="relative w-full h-full"
              >
                <Image
                  quality={100}
                  src="/IMG_8335.JPG"
                  alt="Пара тримається за руки"
                  fill
                  sizes="(max-width: 768px) 88vw, 512px"
                  className="object-contain object-center filter-[grayscale(0.15)_saturate(0.85)_contrast(1.05)_brightness(1.02)]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(88,60,42,0.12))]" />
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
              <motion.h2
                variants={itemVariants}
                id="invitation-title"
                className="m-0 font-display text-[clamp(2.5rem,7vw,3.6rem)] leading-[0.96] font-medium tracking-[-0.02em] text-[#364274]"
              >
                Дорогі гості!
              </motion.h2>

              <div className="space-y-5">
                <motion.p
                  variants={itemVariants}
                  className="m-0 max-w-[28ch] mx-auto text-balance font-sans text-[clamp(1.05rem,2.5vw,1.2rem)] leading-[1.8] font-light text-[#583C2A]"
                >
                  У нашому житті настає особливий день — день, коли ми станемо
                  сім&rsquo;єю.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="m-0 max-w-[28ch] mx-auto text-balance font-sans text-[clamp(1.05rem,2.5vw,1.2rem)] leading-[1.8] font-light text-[#583C2A]"
                >
                  Ми щиро хочемо розділити цю радість разом із вами та зробити
                  цей день теплим, щирим і незабутнім.
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="h-[1px] bg-[#583C2A]/20 mt-4"
                style={{ width: 40 }}
              />
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  )
}
