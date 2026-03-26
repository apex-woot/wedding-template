const bookingUrl =
  "https://www.booking.com/hotel/ua/iavir-rezort.uk.html?chal_t=1772912905071&force_referer="

const phoneHref = "tel:+380685981328"
const phoneLabel = "+38 (068) 598 13 28"

export function AccommodationSection() {
  return (
    <section
      aria-labelledby="accommodation-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#edf2f8_0%,#eef4fb_100%)] px-4 pt-[clamp(4.5rem,10vw,7rem)] pb-[clamp(5rem,12vw,8rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(184,203,228,0.18),transparent_22%),radial-gradient(circle_at_84%_72%,rgba(221,228,237,0.38),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0))]" />

      <div className="relative z-[1] mx-auto max-w-[46rem] rounded-[2rem] bg-[#fffdfa]/90 px-5 pt-10 pb-12 text-center shadow-[0_24px_70px_rgba(134,154,188,0.14)] ring-1 ring-white/80 md:px-10 md:pt-14 md:pb-16">
        <h2
          id="accommodation-title"
          className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-light italic tracking-[-0.03em] text-[#88a9d2]"
        >
          Проживання
        </h2>

        <p className="mx-auto mt-5 max-w-[34rem] text-balance font-sans text-[clamp(1rem,2.5vw,1.12rem)] leading-[1.8] text-[#6e7f98]">
          У Yavir Resort доступне бронювання проживання. Ви можете зарезервувати
          номер телефоном або через Booking.com.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 md:mt-10 md:flex-row md:gap-4">
          <a
            href={phoneHref}
            className="inline-flex min-w-[14rem] items-center justify-center rounded-full bg-[#93b4dc] px-6 py-3.5 font-sans text-[0.8rem] font-medium uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_rgba(124,150,191,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#88abd6]"
          >
            {phoneLabel}
          </a>

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[14rem] items-center justify-center rounded-full border border-[#d7e3f2] bg-white px-6 py-3.5 font-sans text-[0.8rem] font-medium uppercase tracking-[0.18em] text-[#6e7f98] shadow-[0_12px_30px_rgba(119,142,177,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f8fbff]"
          >
            Забронювати на Booking.com
          </a>
        </div>
      </div>
    </section>
  )
}
