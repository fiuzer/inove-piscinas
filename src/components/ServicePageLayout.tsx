import { ArrowRight, MapPin, Shield, Star, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroBg from "../../public/imagens/piscina_fundo.jpg";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { TrackedWhatsAppLink } from "./TrackedWhatsAppLink";
import { WaveDivider } from "./WaveDivider";

type FAQ = { question: string; answer: string };

type ServicePageLayoutProps = {
  title: string;
  subtitle: string;
  description: string[];
  included: string[];
  faq: FAQ[];
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  whatsappHref: string;
  breadcrumbLabel: string;
  imagePosition?: string;
  imageYOffset?: string;
  imageScale?: number;
};

const differentials = [
  {
    icon: Shield,
    title: "Garantia de serviço",
    description: "Todos os projetos têm garantia por escrito, sem surpresas.",
  },
  {
    icon: Wrench,
    title: "Equipe especializada",
    description:
      "Técnicos com mais de 10 anos de experiência exclusiva em fibra de vidro.",
  },
  {
    icon: Star,
    title: "Materiais de qualidade",
    description:
      "Resinas e tintas específicas para estrutura de fibra, resistentes ao cloro e ao sol.",
  },
  {
    icon: MapPin,
    title: "RJ e Niterói",
    description:
      "Atendemos toda a região metropolitana do Rio de Janeiro e Niterói.",
  },
];

export function ServicePageLayout({
  title,
  subtitle,
  description,
  included,
  faq,
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  whatsappHref,
  breadcrumbLabel,
  imagePosition,
  imageYOffset,
  imageScale,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--brand-deep)] pb-20 pt-28 text-white sm:pt-36">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt=""
            fill
            sizes="100vw"
            quality={60}
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-deep)]/80 via-[var(--brand-dark)]/60 to-[var(--brand-deep)]/80" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/50">
            <Link href="/" className="transition hover:text-white/80">
              Início
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">{breadcrumbLabel}</span>
          </nav>
          <h1 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{subtitle}</p>
          <TrackedWhatsAppLink
            href={whatsappHref}
            location={`service-hero-${breadcrumbLabel}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--brand-deep)] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Pedir orçamento
            <ArrowRight className="size-5" />
          </TrackedWhatsAppLink>
        </div>
      </section>

      <WaveDivider flip />

      {/* Descrição + O que está incluso */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                O que está incluso
              </p>
              <h2 className="font-heading mt-3 text-2xl font-semibold text-[var(--brand-deep)] sm:text-3xl">
                Serviço completo, sem surpresas
              </h2>
              <ul className="mt-6 space-y-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-[var(--muted)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Antes / Depois */}
      <WaveDivider variant="dark" flip className="bg-white" />
      <section className="bg-[var(--brand-deep)] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Resultado real
          </p>
          <p className="mb-8 text-center text-2xl font-semibold text-white sm:text-3xl font-heading">
            Antes e depois
          </p>
          <BeforeAfterSlider
            beforeSrc={beforeSrc}
            afterSrc={afterSrc}
            beforeAlt={beforeAlt}
            afterAlt={afterAlt}
            imageQuality={80}
            imagePosition={imagePosition}
            imageYOffset={imageYOffset}
            imageScale={imageScale}
          />
          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
            <span>Antes</span>
            <span>Depois</span>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <WaveDivider flip />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Diferenciais
          </p>
          <h2 className="font-heading mt-3 text-2xl font-semibold text-[var(--brand-deep)] sm:text-3xl">
            Por que escolher a Inove Piscinas?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-md"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-[var(--brand-deep)]">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {d.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <WaveDivider />
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            Dúvidas
          </p>
          <h2 className="font-heading mt-3 text-2xl font-semibold text-[var(--brand-deep)] sm:text-3xl">
            Perguntas frequentes
          </h2>
          <div className="mt-8 space-y-3">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-base font-semibold text-[var(--brand-deep)]">
                  {item.question}
                  <span className="ml-4 shrink-0 text-xl text-[var(--brand)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--muted)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <WaveDivider variant="dark" flip className="bg-slate-50" />
      <section className="bg-[var(--brand-deep)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-2xl font-semibold text-sky-300 sm:text-3xl">
            Pronto para renovar?
          </h2>
          <p className="mt-3 text-white/70">
            Orçamento gratuito. Atendemos Rio de Janeiro e Niterói. Resposta em
            até 24 horas.
          </p>
          <TrackedWhatsAppLink
            href={whatsappHref}
            location={`service-cta-${breadcrumbLabel}`}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--brand-deep)] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
          >
            Falar no WhatsApp
            <ArrowRight className="size-5" />
          </TrackedWhatsAppLink>
        </div>
      </section>
    </>
  );
}
