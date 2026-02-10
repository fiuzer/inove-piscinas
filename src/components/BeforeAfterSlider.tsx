"use client";

import Image from "next/image";
import type React from "react";
import { useId, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(55);
  const id = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.min(100, Math.max(0, next));
    setValue(clamped);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.currentTarget as HTMLDivElement).hasPointerCapture(event.pointerId)) {
      event.preventDefault();
      updateFromClientX(event.clientX);
    }
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.currentTarget as HTMLDivElement).hasPointerCapture(event.pointerId)) {
      (event.currentTarget as HTMLDivElement).releasePointerCapture(
        event.pointerId
      );
    }
  };

  return (
    <div className="relative mx-auto select-none w-[calc(100%-2rem)] max-w-[520px] overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur sm:w-full sm:max-w-none">
      <div
        ref={containerRef}
        className="relative h-[220px] w-full touch-none sm:h-[300px] lg:h-[420px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
          quality={70}
          priority
          fetchPriority="high"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
            quality={70}
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-y-0"
          style={{ left: `${value}%` }}
        >
          <div className="h-full w-1 -translate-x-1/2 bg-white/70" />
          <div
            className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 cursor-grab select-none items-center justify-center rounded-full border border-white/40 bg-white/90 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-deep)] shadow-lg active:cursor-grabbing"
            role="slider"
            aria-label="Arraste para comparar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(value)}
            tabIndex={0}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <span className="whitespace-nowrap">Arraste</span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-slate-500/40 bg-slate-900/40 text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-900/55"
            aria-label="TikTok"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-4 -translate-x-0.5"
              fill="currentColor"
            >
              <path d="M18.5 4.2c-.9-1-1.4-2.2-1.4-3.6h-3.1v12.2c0 1.1-.9 2-2 2s-2-.9-2-2 0-2 2-2c.3 0 .6.1.9.2V7.5c-.3 0-.6-.1-.9-.1-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2V8.6c1 .7 2.2 1.1 3.6 1.1V6.6c-1.1 0-2.1-.5-2.8-1.4z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-slate-500/40 bg-slate-900/40 text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-900/55"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-4"
              fill="currentColor"
            >
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zm5-2.9a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-full border border-slate-500/40 bg-slate-900/40 text-slate-100 transition hover:-translate-y-0.5 hover:bg-slate-900/55"
            aria-label="Facebook"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-4"
              fill="currentColor"
            >
              <path d="M13 9h3l-1 4h-2v8h-4v-8H7V9h2V7.5A4.5 4.5 0 0 1 13.5 3H16v4h-2a1 1 0 0 0-1 1z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <label
          htmlFor={id}
          className="text-sm font-semibold text-white"
        >
          Ajuste o comparativo
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="w-full accent-white"
          aria-label="Controle do antes e depois"
        />
      </div>
    </div>
  );
}
