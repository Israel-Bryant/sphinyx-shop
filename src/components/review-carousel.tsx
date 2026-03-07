"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useEffectEvent, useState } from "react";
import type { FlowProductReviewSlide } from "@/lib/flow-products";

type ReviewCarouselProps = {
  slides: FlowProductReviewSlide[];
};

function StarRow() {
  return (
    <div className="mt-2 flex items-center gap-1 text-[var(--accent)]">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 20 20"
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        >
          <path d="m10 1.8 2.48 5.03 5.55.8-4.01 3.9.95 5.51L10 14.41 5.03 17.04l.95-5.51-4.01-3.9 5.55-.8L10 1.8Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewIcon({ icon }: { icon: FlowProductReviewSlide["icon"] }) {
  switch (icon) {
    case "owner":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 19a7 7 0 0 1 14 0" />
          <path d="m17.5 5.5 1 1 2-2" />
        </svg>
      );
    case "barber":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path d="m8 5 8 8" />
          <path d="m16 5-8 8" />
          <path d="M7 14 5 19" />
          <path d="M17 14 19 19" />
          <circle cx="7" cy="7" r="1.5" />
          <circle cx="17" cy="7" r="1.5" />
        </svg>
      );
    case "growth":
      return (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        >
          <path d="M4 16 10 10l4 4 6-7" />
          <path d="M14 7h6v6" />
          <path d="M4 20h16" />
        </svg>
      );
  }
}

export function ReviewCarousel({ slides }: ReviewCarouselProps) {
  const [index, setIndex] = useState(0);

  const advance = useEffectEvent(() => {
    setIndex((current) => (current + 1) % slides.length);
  });

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      advance();
    }, 4800);

    return () => {
      window.clearInterval(timer);
    };
  }, [slides.length]);

  const activeSlide = slides[index];

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(25,19,8,0.94),rgba(8,8,8,0.98))] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.36)] sm:p-10">
      <div className="absolute -right-10 top-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(214,170,67,0.2),_transparent_70%)] blur-3xl" />

      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[var(--accent)]">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[rgba(214,170,67,0.1)]">
            <ReviewIcon icon={activeSlide.icon} />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              {activeSlide.eyebrow}
            </p>
            <StarRow />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Ir para avaliacao ${slideIndex + 1}`}
              onClick={() => setIndex(slideIndex)}
              className={`h-2.5 rounded-full transition-all ${
                slideIndex === index
                  ? "w-8 bg-[var(--accent)]"
                  : "w-2.5 bg-white/20 hover:bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-10 min-h-[330px] sm:min-h-[290px]">
        <AnimatePresence mode="wait">
          <motion.article
            key={activeSlide.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <h3 className="max-w-2xl font-display text-3xl leading-none text-[var(--foreground)] sm:text-5xl">
              {activeSlide.title}
            </h3>
            <blockquote className="mt-8 max-w-3xl text-[1.45rem] leading-9 text-[var(--foreground)] sm:text-[2rem] sm:leading-[1.45]">
              <span>&quot;</span>
              {activeSlide.quote}
              <span>&quot;</span>
            </blockquote>
            <p className="mt-8 text-lg text-[var(--muted)]">{activeSlide.role}</p>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="pointer-events-none absolute bottom-5 right-6 text-8xl leading-none text-white/6">
        &quot;
      </div>
    </section>
  );
}
