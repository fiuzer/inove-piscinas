import { ArrowRight, ShieldCheck, Star, Wrench } from "lucide-react";
import Image from "next/image";
import heroBg from "../../public/imagens/piscina_fundo.jpg";
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
          placeholder="blur"
          className="object-cover opacity-35 md:hidden"
        />
        <Image
          src={heroBg}
          alt="Piscina com vista ao entardecer"
          fill
          sizes="100vw"
          quality={75}
          placeholder="blur"
          className="hidden object-cover opacity-50 md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-deep)] via-[rgba(0,29,61,0.75)] to-transparent sm:from-[var(--brand-deep)] sm:via-[rgba(0,29,61,0.75)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px pb-20 pt-14 lg:flex-row lg:items-center lg:gap-16 lg:pb-28 lg:pt-20">
        <div className="order-2 flex-1 space-y-5 px-4 text-center sm:px-6 sm:text-left lg:order-1 lg:px-0 lg:text-left">
          <div className="space-y-4">
            <p className="text-xl font-semibold uppercase tracking-[0.2em] text-gray-200/90">
              Sua piscina está desbotada?
            </p>
            <h1 className="font-heading text font-semibold leading-tight text-4xl sm:text-5xl lg:text-6xl">
              <span>Somos especialistas</span>
              <br />
              em reforma de
              <br />
              piscina de fibra
            </h1>
            <div className="mt-6 lg:hidden">
              <BeforeAfterSlider
                beforeSrc="/imagens/depoispiscina.jpg"
                afterSrc="/imagens/antespiscina.jpg"
                beforeAlt="Piscina antes da reforma"
                afterAlt="Piscina depois da reforma"
                priority
                imageQuality={40}
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
              href="https://wa.me/5521993739579?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento."
              location="hero"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--brand-deep)] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Fale com um especialista
              <ArrowRight className="size-4" />
            </TrackedWhatsAppLink>
          </div>

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

        <div className="order-1 hidden flex-1 lg:order-2 lg:block">
          <BeforeAfterSlider
            beforeSrc="/imagens/depoispiscina.jpg"
            afterSrc="/imagens/antespiscina.jpg"
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

