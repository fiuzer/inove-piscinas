"use client";

import { motion } from "framer-motion";
import {
  Brush,
  Droplets,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    title: "Reforma de Piscina de Fibra",
    description:
      "Conserto de fissura, furo e revitalização de pintura completa para devolver o brilho original.",
    icon: Droplets,
  },
  {
    title: "Pintura de Piscina de Fibra",
    description:
      "Pintura profissional com materiais resistentes ao cloro e ao sol, garantindo durabilidade e acabamento premium.",
    icon: Brush,
  },
  {
    title: "Manutenção Hidráulica",
    description:
      "Troca de tubulações, filtros e registros com equipe experiente e soluções rápidas.",
    icon: Wrench,
  },
  // {
  //   title: "Rejuntamento & Reparos",
  //   description:
  //     "Correção de vazamentos e trincas com materiais de alta performance.",
  //   icon: Waves,
  // },
  // {
  //   title: "Tratamento e Limpeza",
  //   description:
  //     "Controle químico e higienização completa para água cristalina o ano inteiro.",
  //   icon: Sparkles,
  // },
  {
    title: "Garantia de Serviços",
    description:
      "Sua tranquilidade é nossa prioridade. Oferecemos garantia em todos os projetos de revitalização.",
    icon: ShieldCheck,
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Serviços"
          title="Reforma rápida, durável e com garantia de quem entende"
          description="Soluções completas para reforma e pintura com foco em segurança e performance."
          align="center"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-xl"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)] transition group-hover:bg-[var(--brand)] group-hover:text-white">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--brand-deep)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
