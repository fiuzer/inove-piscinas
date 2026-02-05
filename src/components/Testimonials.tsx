"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "João Pedro",
    city: "Niterói",
    text: "Fizeram a reforma completa da minha piscina e o resultado foi impecável. Atendimento rápido e organizado.",
  },
  {
    name: "Carla Menezes",
    city: "Barra da Tijuca",
    text: "Equipe muito profissional, cumpriram o prazo e explicaram cada etapa. Recomendo!",
  },
  {
    name: "Rafael Souza",
    city: "Tijuca",
    text: "A pintura ficou perfeita e a água voltou a ficar cristalina. Serviço de primeira.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const current = useMemo(() => testimonials[index], [index]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [total]);

  return (
    <section id="avaliacoes" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Prova social"
          title="Quem contrata, aprova"
          description="Avaliações reais de clientes satisfeitos em toda a região."
          align="center"
        />

        <div className="mt-12 rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-lg sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-1 text-[var(--brand)]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-lg text-[var(--brand-deep)] sm:text-xl">
                “{current.text}”
              </p>
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-[var(--brand)] text-white">
                  {current.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-[var(--brand-deep)]">
                    {current.name}
                  </p>
                  <p className="text-sm text-[var(--muted)]">{current.city}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(idx)}
                className={`h-2.5 rounded-full transition ${
                  idx === index ? "w-10 bg-[var(--brand)]" : "w-2.5 bg-slate-300"
                }`}
                aria-label={`Ver depoimento de ${item.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
