import { DeferredSections } from "@/components/DeferredSections";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WaveDivider } from "@/components/WaveDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reforma de Piscina de Fibra no Rio de Janeiro",
  description:
    "Especialistas em reforma, pintura e manutenção de piscinas e banheiras de fibra no RJ e Niterói. +10 anos de experiência. Orçamento rápido pelo WhatsApp.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Inove Piscinas",
    image: "https://www.inovepiscinas.com/imagens/piscina_fundo.jpg",
    description:
      "Especialistas em reforma, pintura e manutenção de piscinas e banheiras de fibra no Rio de Janeiro e Niterói.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    areaServed: ["Rio de Janeiro", "Niterói"],
    telephone: "+55 21 99373-9579",
    url: "https://www.inovepiscinas.com",
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-20:00",
    serviceType: [
      "Reforma de piscina de fibra",
      "Pintura de piscina de fibra",
      "Reforma de banheira de fibra",
      "Conserto de piscina de fibra",
    ],
  };

  return (
    <main className="bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <WaveDivider flip />
      <Services />
      <DeferredSections />
    </main>
  );
}



