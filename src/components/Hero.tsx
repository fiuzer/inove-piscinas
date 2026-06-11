import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import { ArrowRight, ShieldCheck, Star, Wrench } from "lucide-react";
import Image from "next/image";
import heroBg from "../../public/imagens/piscina_fundo.webp";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { TrackedWhatsAppLink } from "./TrackedWhatsAppLink";

const badges = [
  { icon: ShieldCheck, label: "Garantia de serviço" },
  { icon: Wrench, label: "Equipe especializada" },
  { icon: Star, label: "Referência no mercado" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--brand-deep)] pt-8 text-white sm:pt-12">
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Piscina com vista ao entardecer"
          fill
          sizes="100vw"
          quality={40}
          priority
          placeholder="blur"
          className="object-cover opacity-35 md:hidden"
        />
        <Image
          src={heroBg}
          alt="Piscina com vista ao entardecer"
          fill
          sizes="100vw"
          quality={75}
          priority
          placeholder="blur"
          className="hidden object-cover opacity-50 md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-deep)] via-[rgba(0,29,61,0.75)] to-transparent sm:from-[var(--brand-deep)] sm:via-[rgba(0,29,61,0.75)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-16 sm:pt-12 lg:flex-row lg:items-center lg:gap-16 lg:pb-28 lg:pt-16">
        <div className="order-2 flex-1 space-y-5 px-4 text-center sm:px-6 sm:text-left lg:order-1 lg:px-0 lg:text-left">
          <div className="space-y-3">
            <h1 className="font-heading text font-semibold leading-tight text-3xl sm:text-4xl lg:text-5xl">
              <span>Especialistas em</span>
              <br />
              reforma e pintura de
              <br />
              piscina de fibra
            </h1>
            <div className="mt-6 lg:hidden">
              <BeforeAfterSlider
                beforeSrc="/imagens/depoispiscina.webp"
                afterSrc="/imagens/antespiscina.webp"
                beforeAlt="Piscina antes da reforma"
                afterAlt="Piscina depois da reforma"
                priority
                imageQuality={75}
              />
              <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70">
                <span>Antes</span>
                <span>Depois</span>
              </div>
            </div>
            <p className="text-base text-gray-200 sm:text-lg">
              Há mais de 10 anos sendo referência em reforma, conserto e pintura de piscina de fibra no Rio de Janeiro e Niterói.
              Atendimento rápido, orçamento claro e execução com garantia.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <TrackedWhatsAppLink
              href={WHATSAPP_LINKS.home}
              location="hero"
              className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-base font-semibold text-[var(--brand-deep)] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90 sm:px-10 sm:text-lg lg:px-8 lg:py-3 lg:text-base"
            >
              Fale com um especialista
              <ArrowRight className="size-5" />
            </TrackedWhatsAppLink>
          </div>

          <p className="text-sm italic text-white/75 lg:hidden">
            *Não instalamos, nem vendemos piscinas.
          </p>

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

          <p className="hidden text-sm italic text-white/75 lg:block">
            *Não instalamos, nem vendemos piscinas.
          </p>
        </div>

        <div className="order-1 hidden flex-1 lg:order-2 lg:block">
          <BeforeAfterSlider
            beforeSrc="/imagens/depoispiscina.webp"
            afterSrc="/imagens/antespiscina.webp"
            beforeAlt="Piscina antes da reforma"
            afterAlt="Piscina depois da reforma"
            imageQuality={75}
          />
          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/70">
            <span>Antes</span>
            <span>Depois</span>
          </div>
        </div>

      </div>
    </section>
  );
}

