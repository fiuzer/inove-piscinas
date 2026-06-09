import { ContactSection } from "@/components/ContactSection";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import Image from "next/image";
import heroBg from "../../../public/imagens/piscina_fundo.jpg";
import { WaveDivider } from "@/components/WaveDivider";
import { ArrowRight, Clock, Instagram, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fale com a Inove Piscinas",
  description:
    "Entre em contato com a Inove Piscinas pelo WhatsApp ou formulário. Atendemos Rio de Janeiro e Niterói. Orçamento gratuito.",
};

const WHATSAPP_HREF = WHATSAPP_LINKS.contato;

export default function ContatoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--brand-deep)] pb-16 pt-28 text-white sm:pt-36">
        <div className="absolute inset-0">
          <Image src={heroBg} alt="" fill sizes="100vw" quality={60} className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)]/80 via-[var(--brand-dark)]/60 to-[var(--brand-deep)]/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Atendimento
          </p>
          <h1 className="font-heading mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Fale com a Inove Piscinas
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Atendemos Rio de Janeiro e Niterói. Responda em até 24 horas.
          </p>

          <TrackedWhatsAppLink
            href={WHATSAPP_HREF}
            location="contato-hero"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            <Phone className="size-5" />
            (21) 99373-9579
            <ArrowRight className="size-5" />
          </TrackedWhatsAppLink>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <Clock className="size-4" />
              Segunda a sábado, 8h às 20h
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4" />
              Rio de Janeiro e Niterói
            </span>
            <a
              href="https://www.instagram.com/inovepiscinas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Instagram className="size-4" />
              @inovepiscinas
            </a>
          </div>
        </div>
      </section>

      <WaveDivider variant="dark" flip className="bg-[var(--brand-deep)]" />

      {/* Formulário */}
      <ContactSection />
    </main>
  );
}
