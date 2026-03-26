import Image from "next/image"

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
      className="relative grid min-h-svh place-items-center overflow-hidden bg-[linear-gradient(180deg,#edf3fb_0%,#e7effa_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(145,175,213,0.16),transparent_26%),radial-gradient(circle_at_15%_72%,rgba(201,213,233,0.22),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0.1))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[clamp(10rem,24svh,16rem)] bg-[linear-gradient(180deg,rgba(239,243,249,0)_0%,rgba(239,243,249,0.14)_22%,rgba(240,245,251,0.42)_48%,rgba(243,247,252,0.78)_74%,#f7f9fd_100%)]" />

      <div className="pointer-events-none absolute left-[clamp(0.5rem,4vw,3rem)] bottom-[15%] w-[min(20vw,9rem)] text-[#99b7dd]/25">
        <BotanicalStem />
      </div>
      <div className="pointer-events-none absolute top-[18%] right-[clamp(0.5rem,4vw,3rem)] w-[min(20vw,9rem)] scale-x-[-1] text-[#99b7dd]/25">
        <BotanicalStem />
      </div>

      <div className="relative z-[1] w-full max-w-[38rem] px-[1.2rem] pt-[clamp(4.5rem,12svh,7rem)] pb-[clamp(5rem,12svh,8rem)] md:px-[1.6rem]">
        <article className="grid justify-items-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700">
          <div className="relative z-[2] grid aspect-[0.78] w-full max-w-[28rem] place-items-center">
            <div className="relative h-full w-full overflow-hidden rounded-[48%_48%_22%_22%/34%_34%_18%_18%] bg-[#d8deea] shadow-[0_24px_60px_rgba(101,124,156,0.16)]">
              <Image
                src="/IMG_8335.JPG"
                alt="Пара тримається за руки"
                fill
                sizes="(max-width: 768px) 88vw, 540px"
                className="object-cover object-[center_54%] [filter:grayscale(0.35)_saturate(0.82)_contrast(1.01)_brightness(1.02)]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(94,115,146,0.18)),radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.34),transparent_28%)]" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[16%] px-[0.6rem] text-center text-[#fcf9f4] [text-shadow:0_10px_24px_rgba(83,104,137,0.24)]">
              <span className="block font-display text-[clamp(4rem,14vw,6.6rem)] leading-[0.8] font-light italic tracking-[-0.03em]">
                Весільний
              </span>
              <span className="block translate-x-[21%] font-display text-[clamp(4.7rem,16vw,7.5rem)] leading-[0.8] font-light italic tracking-[-0.03em]">
                день
              </span>
            </div>
          </div>

          <div className="relative mt-[-1.7rem] w-full max-w-[28rem] rounded-[48%_48%_1.7rem_1.7rem/20%_20%_1.7rem_1.7rem] bg-[linear-gradient(180deg,#a8c4e6_0%,#97b7dd_100%)] px-[1.7rem] pt-16 pb-12 text-center shadow-[0_24px_46px_rgba(110,136,175,0.18)] md:px-9 md:pt-[4.3rem] md:pb-[3.3rem]">
            <div className="pointer-events-none absolute inset-4 rounded-[inherit] border border-white/30" />

            <div className="relative z-[1] grid justify-items-center gap-[1.35rem]">
              <p
                id="invitation-title"
                className="m-0 font-display text-[clamp(2.3rem,7vw,3.4rem)] leading-[0.96] font-normal italic tracking-[-0.02em] text-[#fcfaf7]"
              >
                Дорогі гості,
              </p>

              <p className="m-0 max-w-[22ch] text-balance font-sans text-[clamp(0.98rem,2.5vw,1.16rem)] leading-[1.9] font-light tracking-[0.01em] text-[#fcfaf7]">
                У нашому житті відбудеться по-справжньому важлива й прекрасна
                подія - день нашого весілля.
              </p>

              <p className="m-0 max-w-[21ch] text-balance font-sans text-[clamp(0.98rem,2.5vw,1.16rem)] leading-[1.9] font-light tracking-[0.01em] text-[#fcfaf7]">
                Ми будемо безмежно щасливі, якщо ви розділите з нами радість
                цієї особливої миті.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
