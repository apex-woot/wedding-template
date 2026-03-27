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

export function InvitationSection() {
  return (
    <section
      aria-labelledby="invitation-title"
      className="relative grid min-h-svh place-items-center overflow-hidden bg-[#fdfbf7]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(145,175,213,0.1),transparent_35%),radial-gradient(circle_at_15%_72%,rgba(201,213,233,0.15),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.4),rgba(255,255,255,0.1))]" />
      
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="pointer-events-none absolute left-[clamp(0.5rem,4vw,3rem)] bottom-[15%] w-[min(20vw,9rem)] text-[#99b7dd]/20"
      >
        <BotanicalStem />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="pointer-events-none absolute top-[18%] right-[clamp(0.5rem,4vw,3rem)] w-[min(20vw,9rem)] scale-x-[-1] text-[#99b7dd]/20"
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
            <div className="relative h-full w-full overflow-hidden rounded-t-[50%] rounded-b-md bg-[#d8deea] shadow-[0_30px_60px_-15px_rgba(101,124,156,0.3)]">
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
                  className="object-cover object-[center_54%] [filter:grayscale(0.2)_saturate(0.9)_contrast(1.05)_brightness(1.05)]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(94,115,146,0.15))]" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[25%] md:translate-x-[20%] text-center text-[#93b4dc] [text-shadow:0_4px_24px_rgba(255,255,255,0.9)]">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
                className="block font-display text-[clamp(4.5rem,14vw,7rem)] leading-[0.8] font-light italic tracking-[-0.03em]"
              >
                Весільний
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="block translate-x-[25%] font-display text-[clamp(5.2rem,16vw,8rem)] leading-[0.8] font-light italic tracking-[-0.03em]"
              >
                день
              </motion.span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-[28rem]"
          >
            <div className="relative z-[1] grid justify-items-center md:justify-items-start gap-6 text-center md:text-left px-4">
              <p
                id="invitation-title"
                className="m-0 font-display text-[clamp(2.5rem,7vw,3.6rem)] leading-[0.96] font-normal italic tracking-[-0.02em] text-[#4a5f7e]"
              >
                Дорогі гості,
              </p>

              <div className="space-y-5">
                <p className="m-0 max-w-[24ch] mx-auto md:mx-0 text-balance font-sans text-[clamp(1.05rem,2.5vw,1.2rem)] leading-[1.8] font-light tracking-[0.01em] text-[#6b7b93]">
                  У нашому житті відбудеться по-справжньому важлива й прекрасна
                  подія — день нашого весілля.
                </p>

                <p className="m-0 max-w-[24ch] mx-auto md:mx-0 text-balance font-sans text-[clamp(1.05rem,2.5vw,1.2rem)] leading-[1.8] font-light tracking-[0.01em] text-[#6b7b93]">
                  Ми будемо безмежно щасливі, якщо ви розділите з нами радість
                  цієї особливої миті.
                </p>
              </div>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="h-[1px] bg-[#93b4dc] mt-4 hidden md:block"
              />
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  )
}
