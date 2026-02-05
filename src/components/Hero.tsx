"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star, Wrench } from "lucide-react";
import Image from "next/image";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

const badges = [
  { icon: ShieldCheck, label: "Garantia de serviço" },
  { icon: Wrench, label: "Equipe especializada" },
  { icon: Star, label: "Avaliação 4.9/5" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--brand-deep)] pt-16 text-white sm:pt-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1543489822-c49534f3271f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Piscina com vista ao entardecer"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-deep)] via-[rgba(0,29,61,0.75)] to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 lg:flex-row lg:items-center lg:gap-16 lg:pb-28 lg:pt-28">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Inove Piscinas
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Sua piscina pronta para impressionar de novo.
            </h1>
            <p className="text-base text-white/80 sm:text-lg">
              Reforma, pintura e manutenção de piscinas de fibra e alvenaria no
              Rio de Janeiro e Niterói. Atendimento rápido, orçamento claro e
              execução com garantia.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-deep)] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Peça seu orçamento
              <ArrowRight className="size-4" />
            </a>
            <a
              href="https://wa.me/5521993739579"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Falar no WhatsApp
            </a>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-3">
            {badges.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-white/10">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <BeforeAfterSlider
            beforeSrc="https://images.unsplash.com/photo-1630350165500-da78b1bf1e23?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            afterSrc="https://images.unsplash.com/photo-1541253035814-2aface021e5b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            beforeAlt="Piscina antes da reforma"
            afterAlt="Piscina depois da reforma"
          />
          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70">
            <span>Antes</span>
            <span>Depois</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
