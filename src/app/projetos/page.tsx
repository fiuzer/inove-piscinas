import { Gallery } from "@/components/Gallery";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import Image from "next/image";
import heroBg from "../../../public/imagens/piscina_fundo.jpg";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos de Reforma de Piscinas no Rio de Janeiro",
  description:
    "Galeria de projetos antes e depois de piscinas reformadas pela Inove Piscinas no Rio de Janeiro e Niterói. Veja os resultados.",
};

const WHATSAPP_HREF = WHATSAPP_LINKS.projetos;

export default function ProjetosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--brand-deep)] pb-16 pt-28 text-white sm:pt-36">
        <div className="absolute inset-0">
          <Image src={heroBg} alt="" fill priority sizes="100vw" quality={60} className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)]/80 via-[var(--brand-dark)]/60 to-[var(--brand-deep)]/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Portfólio
          </p>
          <h1 className="font-heading mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Projetos realizados no Rio de Janeiro
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Uma seleção de reformas entregues com qualidade e garantia. Clique
            em qualquer foto para ver o antes e depois.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Gallery />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-deep)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-2xl font-semibold text-sky-300 sm:text-3xl">
            Sua piscina pode ser o próximo projeto
          </h2>
          <p className="mt-3 text-white/70">
            Orçamento gratuito. Atendemos Rio de Janeiro e Niterói. Resposta em
            até 24 horas.
          </p>
          <TrackedWhatsAppLink
            href={WHATSAPP_HREF}
            location="projetos-cta"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--brand-deep)] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Pedir orçamento
            <ArrowRight className="size-5" />
          </TrackedWhatsAppLink>
        </div>
      </section>
    </main>
  );
}
