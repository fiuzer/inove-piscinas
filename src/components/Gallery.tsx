"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";

const gallery = [
  {
    src: "/imagens/piscina-1.jpg",
    alt: "Piscina residencial com iluminação azul",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/imagens/piscina-2.jpg",
    alt: "Detalhe de borda de piscina renovada",
  },
  {
    src: "/imagens/piscina-3.jpg",
    alt: "Piscina pronta para uso",
  },
  {
    src: "/imagens/piscina-4.jpg",
    alt: "Manutenção técnica em piscina",
  },
  {
    src: "/imagens/piscina-5.jpg",
    alt: "Área de lazer com piscina revitalizada",
    className: "md:col-span-2",
  },
];

export function Gallery() {
  const [selected, setSelected] = useState<(typeof gallery)[number] | null>(
    null
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelected(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="projetos" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projetos"
          title="Resultados que falam por si"
          description="Uma seleção de reformas e manutenções entregues com alto padrão de acabamento."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-4 md:auto-rows-[180px]">
          {gallery.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setSelected(item)}
              className={`group relative h-52 overflow-hidden rounded-3xl md:h-full ${
                item.className ?? ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition group-hover:opacity-90" />
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                Ver projeto
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-black"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
