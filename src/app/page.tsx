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
    image: "https://www.inovepiscinas.com/imagens/piscina_fundo.webp",
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
      {/* Preload responsivo da imagem LCP — browser escolhe o tamanho certo por DPR sem double-download */}
      <link
        rel="preload"
        as="image"
        href="/_next/image?url=%2Fimagens%2Fantespiscina.webp&w=1080&q=60"
        imageSrcSet="/_next/image?url=%2Fimagens%2Fantespiscina.webp&w=640&q=60 640w, /_next/image?url=%2Fimagens%2Fantespiscina.webp&w=750&q=60 750w, /_next/image?url=%2Fimagens%2Fantespiscina.webp&w=828&q=60 828w, /_next/image?url=%2Fimagens%2Fantespiscina.webp&w=1080&q=60 1080w, /_next/image?url=%2Fimagens%2Fantespiscina.webp&w=1200&q=60 1200w"
        imageSizes="(max-width: 480px) 380px, (max-width: 768px) 520px, 600px"
        fetchPriority="high"
      />
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



