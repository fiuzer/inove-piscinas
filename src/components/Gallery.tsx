"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    id: 1,
    before: "/imagens/piscina-antes1.webp",
    after: "/imagens/piscina1.webp",
    alt: "Projeto 01",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    before: "/imagens/piscina-antes2.webp",
    after: "/imagens/piscina2.webp",
    alt: "Projeto 02",
  },
  {
    id: 3,
    before: "/imagens/pintura-piscina-antes.webp",
    after: "/imagens/piscina3.webp",
    alt: "Projeto 03",
  },
  {
    id: 4,
    before: "/imagens/piscina-antes4.webp",
    after: "/imagens/piscina4.webp",
    alt: "Projeto 04",
  },
  {
    id: 5,
    before: "/imagens/piscina-antes5.webp",
    after: "/imagens/piscina5.webp",
    alt: "Projeto 05",
    className: "md:col-span-2",
  },
  {
    id: 6,
    before: "/imagens/piscina-antes6.webp",
    after: "/imagens/piscina6.webp",
    alt: "Projeto 06",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null
  );
  const [view, setView] = useState<"before" | "after">("after");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelected(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!selected) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selected]);

  return (
    <section id="projetos" className="bg-slate-50 py-12 sm:py-16 cv-auto">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projetos"
          title="Resultados que falam por si"
          description="Uma seleção de apenas algumas de nossas reformas entregues no Rio de Janeiro e Niterói."
          align="left"
        />

        <div className="mt-8 grid gap-4 md:grid-cols-4 md:auto-rows-[180px]">
          {projects.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelected(item);
                setView("after");
              }}
              className={`group relative h-52 overflow-hidden rounded-3xl md:h-full ${
                item.className ?? ""
              }`}
            >
              <Image
                src={item.after}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                quality={80}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition group-hover:opacity-90" />
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                Ver antes e depois
              </span>
            </button>
          ))}
        </div>
      </div>

      {mounted
        ? createPortal(
            selected ? (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
                onClick={() => setSelected(null)}
              >
                <div
                  className="relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-black"
                  onClick={(event) => event.stopPropagation()}
                >
                    <button
                      type="button"
                      className="absolute right-4 top-4 z-10 flex size-12 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
                      onClick={() => setSelected(null)}
                      aria-label="Fechar imagem"
                    >
                      <span className="text-2xl leading-none">×</span>
                    </button>

                    <div className="flex h-full flex-col items-center justify-center gap-4 bg-black/90 p-6">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setView("before")}
                          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition ${
                            view === "before"
                              ? "bg-white text-[var(--brand-deep)]"
                              : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          Antes
                        </button>
                        <button
                          type="button"
                          onClick={() => setView("after")}
                          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition ${
                            view === "after"
                              ? "bg-white text-[var(--brand-deep)]"
                              : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          Depois
                        </button>
                      </div>

                      <div className="relative h-full w-full max-w-4xl flex-1 overflow-hidden rounded-2xl">
                        <Image
                          src={view === "before" ? selected.before : selected.after}
                          alt={`${selected.alt} - ${
                            view === "before" ? "Antes" : "Depois"
                          }`}
                          fill
                          className="object-contain"
                          sizes="100vw"
                          quality={90}
                        />
                      </div>
                    </div>
                </div>
              </div>
            ) : null,
            document.body
          )
        : null}
    </section>
  );
}
