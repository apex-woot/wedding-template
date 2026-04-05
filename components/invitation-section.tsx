"use client"

import Image from "next/image"
import { motion } from "framer-motion"

function BotanicalStem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 240"
      aria-hidden="true"
      className={`h-auto w-full ${className}`}
      fill="none"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M49 235C48 195 50 161 59 127C65 106 69 85 62 55C58 37 49 20 36 7"
          strokeWidth="1.3"
        />
        <path d="M58 123C74 112 85 98 90 82" strokeWidth="0.95" />
        <path d="M55 104C40 94 30 82 25 66" strokeWidth="0.95" />
        <path d="M89 82C79 79 69 82 61 91" strokeWidth="0.85" />
        <path d="M24 66C34 64 43 67 51 76" strokeWidth="0.85" />
      </g>
    </svg>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const } },
}

export function InvitationSection() {
  return (
    <section
      id="invitation"
      aria-labelledby="invitation-title"
      className="relative grid min-h-svh place-items-center overflow-hidden bg-[#F5F0E8]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(107,83,57,0.06),transparent_35%),radial-gradient(circle_at_15%_72%,rgba(180,168,150,0.1),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.3),rgba(255,255,255,0.05))]" />

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="pointer-events-none absolute left-[clamp(0.5rem,4vw,3rem)] bottom-[15%] w-[min(20vw,9rem)] text-[#A09483]/18"
      >
        <BotanicalStem />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="pointer-events-none absolute top-[18%] right-[clamp(0.5rem,4vw,3rem)] w-[min(20vw,9rem)] scale-x-[-1] text-[#A09483]/18"
      >
        <BotanicalStem />
      </motion.div>

      <div className="relative z-[1] w-full max-w-[50rem] px-[1.2rem] pt-[clamp(6rem,15svh,10rem)] pb-[clamp(7rem,18svh,12rem)] md:px-[1.6rem]">
        <article className="grid justify-items-center md:grid-cols-[1fr_1.1fr] md:items-center md:gap-8 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-[2] grid aspect-[0.7] w-full max-w-[24rem] place-items-center mb-12 md:mb-0 md:-mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative h-full w-full overflow-hidden rounded-t-[50%] rounded-b-md bg-[#E8DCCB] shadow-[0_30px_60px_-15px_rgba(80,68,52,0.3)]"
            >
              <motion.div
                whileInView={{ scale: 1.05 }}
                transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="w-full h-full"
              >
                <Image
                  src="/IMG_8335.JPG"
                  alt="Пара тримається за руки"
                  fill
                  sizes="(max-width: 768px) 88vw, 400px"
                  className="object-cover object-[center_54%] [filter:grayscale(0.15)_saturate(0.85)_contrast(1.05)_brightness(1.02)]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(80,68,52,0.12))]" />
            </motion.div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[25%] md:translate-x-[20%] text-center text-[#8FACC2] [text-shadow:0_4px_24px_rgba(245,240,232,0.9)]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="block font-display text-[clamp(4.5rem,14vw,7rem)] leading-[0.8] font-medium tracking-[-0.03em]"
              >
                Весільний
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="block translate-x-[25%] font-display text-[clamp(5.2rem,16vw,8rem)] leading-[0.8] font-medium tracking-[-0.03em]"
              >
                день
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative w-full max-w-[28rem]"
          >
            <div className="relative z-[1] grid justify-items-center md:justify-items-start gap-6 text-center md:text-left px-4">
              <motion.p
                variants={itemVariants}
                id="invitation-title"
                className="m-0 font-display text-[clamp(2.5rem,7vw,3.6rem)] leading-[0.96] font-medium tracking-[-0.02em] text-[#364274]"
              >
                Дорогі гості,
              </motion.p>

              <div className="space-y-5">
                <motion.p variants={itemVariants} className="m-0 max-w-[24ch] mx-auto md:mx-0 text-balance font-sans text-[clamp(1.05rem,2.5vw,1.2rem)] leading-[1.8] font-light tracking-[0.01em] text-[#4E5D72]">
                  У нашому житті відбудеться по-справжньому важлива й прекрасна
                  подія — день нашого весілля.
                </motion.p>

                <motion.p variants={itemVariants} className="m-0 max-w-[24ch] mx-auto md:mx-0 text-balance font-sans text-[clamp(1.05rem,2.5vw,1.2rem)] leading-[1.8] font-light tracking-[0.01em] text-[#4E5D72]">
                  Ми будемо безмежно щасливі, якщо ви розділите з нами радість
                  цієї особливої миті.
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="h-[1px] bg-[#583C2A]/40 mt-4 hidden md:block"
                style={{ width: 40 }}
              />
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  )
}
