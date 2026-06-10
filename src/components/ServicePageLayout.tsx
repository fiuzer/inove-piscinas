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
  imagePositionMobile?: string;
  imageYOffset?: string;
  imageScale?: number;
};

const differentials = [
  {
    icon: Shield,
    title: "Garantia de serviço",
    description: "Todos os projetos têm garantia, sem surpresas.",
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
  imagePositionMobile,
  imageYOffset,
  imageScale,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[var(--brand-deep)] pt-8 text-white sm:pt-12">
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={60}
            className="object-cover opacity-30 md:opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-deep)] via-[rgba(0,29,61,0.75)] to-transparent" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 sm:pt-12 lg:flex-row lg:items-center lg:gap-16 lg:pb-28 lg:pt-16">
          {/* Texto */}
          <div className="order-2 flex-1 space-y-5 text-center sm:text-left lg:order-1 lg:text-left">
            <nav aria-label="Breadcrumb" className="text-sm text-white/50">
              <Link href="/" className="transition hover:text-white/80">
                Início
              </Link>
              <span className="mx-2">›</span>
              <span className="text-white/80">{breadcrumbLabel}</span>
            </nav>
            <h1 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            {/* Slider mobile — inline dentro do bloco de texto */}
            <div className="lg:hidden">
              <BeforeAfterSlider
                beforeSrc={beforeSrc}
                afterSrc={afterSrc}
                beforeAlt={beforeAlt}
                afterAlt={afterAlt}
                priority
                imageQuality={75}
                imagePosition={imagePosition}
                imagePositionMobile={imagePositionMobile}
                imageYOffset={imageYOffset}
                imageScale={imageScale}
              />
              <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                <span>Antes</span>
                <span>Depois</span>
              </div>
            </div>
            <p className="text-base text-white/80 sm:text-lg">{subtitle}</p>
            <TrackedWhatsAppLink
              href={whatsappHref}
              location={`service-hero-${breadcrumbLabel}`}
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[var(--brand-deep)] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Pedir orçamento
              <ArrowRight className="size-5" />
            </TrackedWhatsAppLink>
          </div>
          {/* Slider desktop */}
          <div className="order-1 hidden flex-1 lg:order-2 lg:block">
            <BeforeAfterSlider
              beforeSrc={beforeSrc}
              afterSrc={afterSrc}
              beforeAlt={beforeAlt}
              afterAlt={afterAlt}
              priority
              imageQuality={80}
              imagePosition={imagePosition}
              imagePositionMobile={imagePositionMobile}
              imageYOffset={imageYOffset}
              imageScale={imageScale}
            />
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
              <span>Antes</span>
              <span>Depois</span>
            </div>
          </div>
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

      {/* Diferenciais */}
      <WaveDivider variant="dark" flip className="bg-white" />
      <section className="bg-[var(--brand-deep)] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Diferenciais
          </p>
          <h2 className="font-heading mt-3 text-2xl font-semibold text-white sm:text-3xl">
            Por que escolher a Inove Piscinas?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="rounded-3xl border border-white/10 bg-white/10 p-6"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    {d.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <WaveDivider flip />
      <section className="bg-white py-12 sm:py-16">
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
      <WaveDivider variant="dark" flip className="bg-white" />
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
