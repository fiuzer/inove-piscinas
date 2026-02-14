"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mauricio Cymerman",
    city: "Rio de Janeiro",
    rating: 5,
    text: "Atendimento 100%. Além da reforma, deram um suporte de como ajustar a montagem da alvenaria e refizeram o dispositivo de aspiração para outra lateral. Foi bem sincero quanto a utilização do Gelcolt, que eles não utilizam, que era uma preocupação minha, e a piscina está perfeita. Com certeza as próximas reformas serão com a equipe INOVE!",
  },
  {
    name: "Edmundo Novaes",
    city: "Rio de Janeiro",
    rating: 5,
    text: "Fiz uma reforma completa na minha piscina com a equipe da Inove Piscinas e o resultado ficou excelente. O serviço foi muito bem executado, com atenção aos detalhes e grande profissionalismo. O atendimento do Leonardo merece destaque pela cordialidade, transparência e comprometimento em todas as etapas. Além disso, o preço cobrado foi totalmente justo, especialmente considerando a qualidade do trabalho entregue. Recomendo sem hesitar a Inove Piscinas para quem busca um serviço de alto nível.",
  },
  {
    name: "Cley Dejosi",
    city: "Rio de Janeiro",
    rating: 5,
    text: "Serviço executado 100%, ficou muito bonita, em vista do que estava, equipe super profissional.",
  },
  {
    name: "Renata Peres",
    city: "Rio de Janeiro",
    rating: 5,
    text: "Estou muito satisfeita com o serviço de reforço e pintura da minha piscina. Excelente atendimento, profissionais competentes e caprichosos.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const total = testimonials.length;

  const current = useMemo(() => testimonials[index], [index]);
  const canExpand = current.text.length > 180;

  useEffect(() => {
    if (expanded) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [total, expanded]);

  useEffect(() => {
    setExpanded(false);
  }, [index]);

  return (
    <section id="avaliacoes" className="bg-white py-12 sm:py-16 cv-auto">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem contrata, aprova"
          description="Avaliações reais de clientes no Google."
          align="left"
        />

        <div className="mt-8 rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-lg sm:p-10">
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
                {Array.from({ length: current.rating }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-current" />
                ))}
              </div>
              <div className="relative min-h-[5.6rem] sm:min-h-[6.5rem]">
                <p
                  className="text-lg text-[var(--brand-deep)] sm:text-xl"
                  style={
                    expanded
                      ? undefined
                      : {
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }
                  }
                >
                  “{current.text}”
                </p>
                {canExpand && !expanded ? (
                  <>
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-slate-50/95 via-slate-50/60 to-transparent"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      onClick={() => setExpanded(true)}
                      className="absolute bottom-0 right-0 bg-slate-50/80 pl-2 text-sm font-semibold text-[var(--brand)] backdrop-blur-[1px] transition hover:opacity-80"
                    >
                      Ver mais
                    </button>
                  </>
                ) : null}
              </div>
              <div className="min-h-5">
                {canExpand && expanded ? (
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    className="text-sm font-semibold text-[var(--brand)] transition hover:opacity-80"
                  >
                    Ver menos
                  </button>
                ) : null}
              </div>
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

          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((item, idx) => (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  setIndex(idx);
                  setExpanded(false);
                }}
                className={`h-4 rounded-full transition ${
                  idx === index ? "w-12 bg-[var(--brand)]" : "w-4 bg-slate-300"
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
