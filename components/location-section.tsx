import { Navigation } from "lucide-react"

const venuePhotoUrl =
  "https://lh3.googleusercontent.com/p/AF1QipOhgidaF-66o5qAGBQdWSngmfA8gYAQGlWm1C5v=w1600-h1067-k-no"

const embeddedMapUrl =
  "https://www.google.com/maps?q=Yavir%20Resort%2C%20Vulytsia%20Bichna%2C%2055A%2C%20Starychi%2C%20Lviv%20Oblast%2C%2081052&output=embed"

export function LocationSection() {
  return (
    <section
      aria-labelledby="location-title"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#edf2f8_0%,#eff5fb_100%)] px-4 pt-[clamp(4.5rem,10vw,7rem)] pb-[clamp(5rem,12vw,8rem)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(164,187,220,0.2),transparent_24%),radial-gradient(circle_at_88%_78%,rgba(212,224,240,0.5),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0))]" />

      <div className="relative z-[1] mx-auto max-w-[72rem]">
        <div className="mx-auto max-w-[42rem] text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <h2
            id="location-title"
            className="font-display text-[clamp(2.7rem,8vw,4.7rem)] leading-[0.95] font-light italic tracking-[-0.03em] text-[#88a9d2]"
          >
            Локація
          </h2>
          <p className="mt-4 font-sans text-[clamp(1.05rem,2.8vw,1.3rem)] font-medium tracking-[0.08em] text-[#6e7f98] uppercase">
            Yavir Resort
          </p>
          <p className="mt-4 text-balance font-sans text-[clamp(1rem,2.4vw,1.1rem)] leading-[1.8] text-[#7b8ca5]">
            Церемонія відбудеться в костелі святої Анни у Львові, а святкування
            продовжиться в Yavir Resort.
          </p>
        </div>

        <div className="mt-10 lg:mt-14">
          <div className="mb-6 overflow-hidden rounded-[2rem] bg-white/75 p-2 shadow-[0_24px_70px_rgba(134,154,188,0.14)] ring-1 ring-white/80 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-75">
            <div className="overflow-hidden rounded-[1.4rem] bg-[#dde8f6]">
              <img
                src={venuePhotoUrl}
                alt="Yavir Resort"
                className="block h-[15rem] w-full object-cover md:h-[22rem]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white/75 p-2 shadow-[0_24px_70px_rgba(134,154,188,0.14)] ring-1 ring-white/80 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700 motion-safe:delay-100">
            <div className="relative overflow-hidden rounded-[1.4rem] bg-[#dde8f6]">
              <iframe
                title="Маршрут на Google Maps до Yavir Resort"
                src={embeddedMapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[24rem] w-full border-0 md:h-[32rem]"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(235,241,248,0.88)_100%)] px-5 pt-10 pb-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-2 shadow-[0_12px_30px_rgba(119,142,177,0.18)] ring-1 ring-[#d7e3f2]">
                  <Navigation className="size-4 text-[#88a9d2]" />
                  <span className="font-sans text-[0.78rem] font-medium uppercase tracking-[0.18em] text-[#5f7491]">
                    Yavir Resort
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
