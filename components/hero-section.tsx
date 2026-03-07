"use client";

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero" aria-label="Wedding invitation hero">
      <div className="hero__photo-wrap" aria-hidden="true">
        <Image
          src="/IMG_8529.jpg"
          alt=""
          fill
          priority
          quality={100}
          sizes="100vw"
          className="hero__photo"
        />
        <div className="hero__shade" />
      </div>

      <div className="hero__content">
        <div className="hero__top">
          <h1 className="hero__couple">
            <span>Vitalii</span>
            <span className="hero__and">&amp;</span>
            <span>Tetiana</span>
          </h1>
        </div>

        <div className="hero__bottom">
          <p className="hero__meta">11 07 2026 · LVIV</p>
        </div>
      </div>

      <style>{`
        .hero {
          --ivory: #f7f1e8;
          --gold: #f2cf95;
          --name: #fffaf0;

          position: relative;
          min-height: 100svh;
          overflow: hidden;
          background: #e6dfd5;
        }

        .hero__photo-wrap {
          position: absolute;
          inset: 0;
          animation: revealMask 1.4s cubic-bezier(0.2, 0.9, 0.2, 1) both;
        }

        .hero__photo {
          object-fit: cover;
          object-position: 56% center;
          animation:
            photoFadeIn 1.8s cubic-bezier(0.22, 1, 0.36, 1) both,
            photoDrift 18s ease-in-out 1.4s infinite alternate;
          will-change: transform;
          transform-origin: center;
        }

        .hero__shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
              to bottom,
              rgba(12, 10, 8, 0.3) 0%,
              rgba(12, 10, 8, 0.18) 32%,
              rgba(12, 10, 8, 0.44) 100%
            ),
            radial-gradient(
              90% 80% at 50% 50%,
              rgba(0, 0, 0, 0) 38%,
              rgba(0, 0, 0, 0.22) 100%
            );
        }

        .hero__content {
          position: relative;
          z-index: 2;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1.3rem 1rem 2rem;
          color: var(--ivory);
          text-align: center;
        }

        .hero__top {
          display: grid;
          gap: 0.4rem;
          padding-top: clamp(5.4rem, 16svh, 10rem);
          animation: riseIn 1s 0.45s both;
        }

        .hero__couple {
          display: inline-flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.45rem;
          margin: 0;
          font-family: var(--font-display), "Cormorant Garamond", serif;
          font-weight: 400;
          font-style: italic;
          font-size: clamp(3.4rem, 15.8vw, 6.2rem);
          letter-spacing: -0.02em;
          line-height: 0.96;
          color: var(--name);
          text-shadow: 0 10px 28px rgba(0, 0, 0, 0.58);
        }

        .hero__and {
          display: inline-block;
          color: var(--gold);
          font-size: clamp(1.2rem, 5vw, 1.75rem);
          line-height: 1;
          transform: translateY(-0.04em);
        }

        .hero__bottom {
          display: grid;
          gap: 0.38rem;
          animation: riseIn 1s 0.9s both;
        }

        .hero__meta {
          margin: 0;
          font-family: var(--font-sans), "Jost", sans-serif;
          letter-spacing: 0.22em;
          font-size: clamp(0.82rem, 3.7vw, 1rem);
          font-weight: 500;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
        }

        .hero__scroll-text {
          margin: 0;
          font-family: var(--font-sans), "Jost", sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.19em;
          opacity: 0.94;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
        }

        @keyframes revealMask {
          from {
            clip-path: inset(0 0 100% 0);
          }
          to {
            clip-path: inset(0 0 0 0);
          }
        }

        @keyframes photoFadeIn {
          from {
            opacity: 0;
            filter: brightness(0.84) saturate(0.94);
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            filter: brightness(1) saturate(1);
            transform: scale(1);
          }
        }

        @keyframes photoDrift {
          0% {
            transform: scale(1.01) translateY(0);
          }
          100% {
            transform: scale(1.03) translateY(-1.1%);
          }
        }

        @keyframes riseIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 700px) {
          .hero__photo {
            object-position: center center;
          }

          .hero__content {
            padding: 2rem 2rem 2.6rem;
          }

          .hero__top {
            gap: 0.8rem;
            padding-top: clamp(6.4rem, 15svh, 12rem);
          }

          .hero__couple {
            font-size: clamp(5rem, 10.5vw, 8.2rem);
            gap: 0.7rem;
          }

          .hero__bottom {
            gap: 0.5rem;
          }

          .hero__meta {
            font-size: clamp(0.95rem, 1.4vw, 1.15rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero__photo-wrap,
          .hero__photo,
          .hero__shade,
          .hero__top,
          .hero__bottom,
          .hero__couple {
            animation: none !important;
          }

          .hero__photo-wrap {
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </section>
  );
}
