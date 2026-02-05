"use client";

import Image from "next/image";
import { useId, useState } from "react";

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

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl backdrop-blur">
      <div className="relative h-[320px] w-full sm:h-[380px] lg:h-[420px]">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${value}%` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${value}%` }}
        >
          <div className="h-full w-1 -translate-x-1/2 bg-white/70" />
          <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/90 text-xs font-semibold uppercase tracking-widest text-[var(--brand-deep)] shadow-lg">
            Antes
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 px-6 py-4">
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
