"use client";

import { useEffect, useState } from "react";

const TOTAL = 6;
const CARD_WIDTH = 280;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;

function CourseCard() {
  return (
    <div className="flex-none w-[280px] overflow-hidden rounded-xl border border-dashed border-gray-300 bg-white">
      <div className="h-[160px] border-b border-dashed border-gray-300 bg-gray-100" />
      <div className="space-y-3 p-5">
        <div className="h-10 w-10 rounded-md bg-gray-200" />
        <div className="h-5 w-full rounded bg-gray-200" />
        <div className="space-y-1.5">
          <div className="h-3.5 w-full rounded bg-gray-100" />
          <div className="h-3.5 w-3/4 rounded bg-gray-100" />
        </div>
        <div className="mt-3 border-t border-gray-200 pt-3">
          <div className="h-4 w-1/2 rounded bg-gray-200" />
          <div className="mt-2.5 flex items-center justify-between">
            <div className="h-4 w-1/3 rounded bg-gray-200" />
            <div className="h-7 w-7 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow({ direction, disabled, onClick }: {
  direction: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Previous courses" : "Next courses"}
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-[0_4px_14px_rgba(27,43,101,0.15)] transition-all hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-navy ${
        direction === "left" ? "left-2 lg:-left-5" : "right-2 lg:-right-5"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        {direction === "left" ? (
          <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function Courses() {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1280) setVisible(4);
      else if (w >= 1024) setVisible(3);
      else if (w >= 640) setVisible(2);
      else setVisible(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, TOTAL - visible);

  // Clamp current index if visible count grew on resize
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="courses" className="bg-beige px-6 py-[90px] sm:px-10">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="relative mb-10 text-center">
          {/* Download CTA — top right on desktop */}
          <div className="absolute right-0 top-2 hidden h-12 w-52 rounded border border-dashed border-gray-400 lg:block" />
          <div className="mx-auto mb-5 h-12 w-[460px] max-w-full rounded border border-dashed border-gray-400" />
          <div className="mx-auto h-14 max-w-[640px] rounded border border-dashed border-gray-400" />
        </div>

        {/* Download CTA — full-width on tablet/mobile */}
        <div className="mx-auto mb-6 block h-12 w-full max-w-xs rounded border border-dashed border-gray-400 lg:hidden" />

        {/* Pills row */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-32 rounded border border-dashed border-gray-400"
            />
          ))}
        </div>

        {/* Carousel — 4 visible at desktop, arrow controls */}
        <div
          className="relative"
          role="region"
          aria-label="Course categories carousel"
        >
          <Arrow direction="left" disabled={index === 0} onClick={prev} />
          <Arrow direction="right" disabled={index === maxIndex} onClick={next} />

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * STEP}px)` }}
            >
              {Array.from({ length: TOTAL }).map((_, i) => (
                <CourseCard key={i} />
              ))}
            </div>
          </div>

          {/* Dot indicator */}
          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-navy" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-10 flex flex-col items-stretch justify-between gap-6 rounded-2xl border border-dashed border-gray-300 bg-white p-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-5">
            <div className="h-[50px] w-[50px] rounded-full border border-dashed border-gray-400" />
            <div className="space-y-3">
              <div className="h-8 w-72 max-w-full rounded border border-dashed border-gray-400" />
              <div className="h-5 w-96 max-w-full rounded border border-dashed border-gray-400" />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <div className="h-12 w-52 rounded bg-lime/40" />
            <div className="h-6 w-36 rounded border border-dashed border-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
