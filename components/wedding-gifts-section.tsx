export function WeddingGiftsSection() {
  return (
    <section
      aria-labelledby="wedding-gifts-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#eef4fb_0%,#edf2f8_100%)] px-4 pt-[clamp(4.5rem,10vw,7rem)] pb-[clamp(5rem,12vw,8rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(184,203,228,0.2),transparent_22%),radial-gradient(circle_at_82%_76%,rgba(221,228,237,0.4),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />

      <div className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-[#fffdfa]/90 px-5 pt-10 pb-12 text-center shadow-[0_24px_70px_rgba(134,154,188,0.14)] ring-1 ring-white/80 md:px-10 md:pt-14 md:pb-16">
        <h2
          id="wedding-gifts-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-light italic tracking-[-0.03em] text-[#88a9d2]"
        >
          Весільні подарунки
        </h2>

        <p className="mx-auto mt-5 max-w-[32rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#6e7f98]">
          Ваша присутність на нашому весіллі - найбільший подарунок для нас.
          Якщо ви захочете привітати нас подарунком, ми будемо вдячні за внесок
          у наше спільне майбутнє.
        </p>
      </div>
    </section>
  )
}
