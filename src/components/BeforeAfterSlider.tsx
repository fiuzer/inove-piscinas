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
    (event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.currentTarget as HTMLDivElement).hasPointerCapture(event.pointerId)) {
      updateFromClientX(event.clientX);
    }
  };

  return (
    <div className="relative mx-auto select-none w-[calc(100%-2rem)] max-w-[520px] overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-xl backdrop-blur sm:w-full sm:max-w-none">
      <div
        ref={containerRef}
        className="relative h-[220px] w-full sm:h-[300px] lg:h-[420px]"
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 520px"
          className="object-cover"
          priority
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
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-y-0"
          style={{ left: `${value}%` }}
        >
          <div className="h-full w-1 -translate-x-1/2 bg-white/70" />
          <div
            className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 cursor-grab select-none items-center justify-center rounded-full border border-white/40 bg-white/90 text-xs font-semibold uppercase tracking-widest text-[var(--brand-deep)] shadow-lg active:cursor-grabbing"
            role="slider"
            aria-label="Arraste para comparar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(value)}
            tabIndex={0}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
          >
            Antes
          </div>
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
