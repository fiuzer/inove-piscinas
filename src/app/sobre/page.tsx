import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import { WaveDivider } from "@/components/WaveDivider";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import Image from "next/image";
import heroBg from "../../../public/imagens/piscina_fundo.webp";
import { ArrowRight, MapPin, Shield, Star, Wrench } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Inove Piscinas",
  description:
    "Conheça a Inove Piscinas: mais de 10 anos de experiência em reforma e pintura de piscinas e banheiras de fibra no Rio de Janeiro e Niterói.",
};

const WHATSAPP_HREF = WHATSAPP_LINKS.sobre;

const stats = [
  { value: "10+", label: "Anos de experiência" },
  { value: "500+", label: "Projetos realizados" },
  { value: "2", label: "Cidades atendidas" },
  { value: "100%", label: "Com garantia" },
];

const values = [
  {
    icon: Shield,
    title: "Honestidade",
    description:
      "Apresentamos um diagnóstico transparente e um orçamento claro antes de iniciar qualquer serviço.",
  },
  {
    icon: Wrench,
    title: "Técnica especializada",
    description:
      "Nossa equipe trabalha exclusivamente com fibra de vidro, acumulando expertise que generais não têm.",
  },
  {
    icon: Star,
    title: "Qualidade comprovada",
    description:
      "Utilizamos apenas materiais compatíveis com a estrutura de fibra, garantindo durabilidade real.",
  },
  {
    icon: MapPin,
    title: "Presença local",
    description:
      "Nascemos no Rio de Janeiro e conhecemos as condições climáticas que afetam as piscinas da região.",
  },
];

export default function SobrePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--brand-deep)] pb-20 pt-28 text-white sm:pt-36">
        <div className="absolute inset-0">
          <Image src={heroBg} alt="" fill priority sizes="100vw" quality={60} className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)]/80 via-[var(--brand-dark)]/60 to-[var(--brand-deep)]/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Nossa história
          </p>
          <h1 className="font-heading mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Sobre a Inove Piscinas
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Mais de 10 anos cuidando de piscinas e banheiras de fibra no Rio de
            Janeiro e Niterói.
          </p>
        </div>
      </section>

      <WaveDivider flip />

      {/* História */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            <p>
              A Inove Piscinas nasceu da vontade de oferecer um serviço
              especializado e honesto para donos de piscinas e banheiras de
              fibra no Rio de Janeiro. Desde o início, nosso foco foi claro:
              trabalhar exclusivamente com fibra de vidro, desenvolvendo a
              técnica e o conhecimento que esse material exige.
            </p>
            <p>
              Ao longo de mais de 10 anos, realizamos centenas de reformas e
              pinturas em residências, condomínios, hotéis e spas nas regiões de
              Rio de Janeiro e Niterói. Cada projeto é tratado com atenção
              individual — porque sabemos que a piscina ou banheira é um
              investimento importante para o nosso cliente.
            </p>
            <p>
              Nossa missão é simples: devolver o brilho e a integridade da sua
              piscina ou banheira de fibra com técnica correta, materiais de
              qualidade e um atendimento que preza pela transparência do começo
              ao fim.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-semibold text-[var(--brand)] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <WaveDivider flip />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Nossos valores
          </p>
          <h2 className="font-heading mt-3 text-2xl font-semibold text-[var(--brand-deep)] sm:text-3xl">
            O que nos guia
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[var(--brand-deep)]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider variant="dark" flip className="bg-white" />
      <section className="bg-[var(--brand-deep)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-2xl font-semibold text-sky-300 sm:text-3xl">
            Vamos cuidar da sua piscina?
          </h2>
          <p className="mt-3 text-white/70">
            Orçamento gratuito. Atendemos Rio de Janeiro e Niterói. Resposta em
            até 24 horas.
          </p>
          <TrackedWhatsAppLink
            href={WHATSAPP_HREF}
            location="sobre-cta"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--brand-deep)] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Falar no WhatsApp
            <ArrowRight className="size-5" />
          </TrackedWhatsAppLink>
        </div>
      </section>
    </main>
  );
}
