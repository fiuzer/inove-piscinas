"use client";

import { Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    name: "Fernanda Paradela",
    city: "Rio de Janeiro",
    rating: 5,
    text: "Excelentes profissionais! Piscina renovada e perfeita! Leonardo sempre muito educado e solicito desde o primeiro contato com a empresa até o pós, prezando pela satisfação do cliente.",
  },
  {
    name: "Edmundo Novaes",
    city: "Rio de Janeiro",
    rating: 5,
    text: "Fiz uma reforma completa na minha piscina com a equipe da Inove Piscinas e o resultado ficou excelente. O serviço foi muito bem executado, com atenção aos detalhes e grande profissionalismo. O atendimento do Leonardo merece destaque pela cordialidade, transparência e comprometimento em todas as etapas. Além disso, o preço cobrado foi totalmente justo, especialmente considerando a qualidade do trabalho entregue. Recomendo sem hesitar a Inove Piscinas para quem busca um serviço de alto nível.",
  },
  {
    name: "Almir Ferreira",
    city: "Rio de Janeiro",
    rating: 5,
    text: "Já fiz 2 serviços com a inove, sendo que o primeiro foi recuperação estrutural de aproximadamente 2 metros de larguras por 2 metros de comprimento no fundo da piscina e pintura geral da piscina, Com sucesso total e o segundo serviço foi fortalecer o serviço anterior por pedido meu e pintura geral. Recomendo para quem procura preço, qualidade e responsabilidade com o serviço prestado aos seus clientes. Parabéns para toda a equipe da inove piscinas estou muitíssimo satisfeito com todos os senhores.",
  },
  {
    name: "Wagner Guedes",
    city: "Rio de Janeiro",
    rating: 5,
    text: "Muito boa. Já pela segunda vez utilizo os serviços e ainda indico para os amigos. Podem confiar na qualidade dos serviços ! Eu sou prova viva disso !",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
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

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
    setExpanded(false);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
    setExpanded(false);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = touchEndX - touchStartX;
    const swipeThreshold = 40;

    if (deltaX <= -swipeThreshold) {
      goNext();
    } else if (deltaX >= swipeThreshold) {
      goPrev();
    }

    setTouchStartX(null);
  };

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
          <div
            key={current.name}
            className="space-y-6"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
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
          </div>

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
