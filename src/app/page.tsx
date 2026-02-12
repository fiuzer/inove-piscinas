import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { DeferredSections } from "@/components/DeferredSections";
import { WaveDivider } from "@/components/WaveDivider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inove Piscinas - Reforma de Piscinas no RJ",
  description:
    "Especialistas em reforma e pintura de piscinas de fibra no Rio de Janeiro e NiterÃ³i.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Inove Piscinas",
    image:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Reforma, pintura e manutenÃ§Ã£o de piscinas de fib ra e alvenaria no Rio de Janeiro e NiterÃ³i.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rio de Janeiro",
      addressRegion: "RJ",
      addressCountry: "BR",
    },
    areaServed: ["Rio de Janeiro", "NiterÃ³i"],
    telephone: "+55 21 99373-9579",
    url: "https://www.inovepiscinas.com",
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-20:00",
  };

  return (
    <main className="bg-[var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <Hero />
      <WaveDivider flip />
      <Services />
      <DeferredSections />

      <footer className="bg-[var(--brand-deep)] py-10 text-sm text-white/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p>Â© 2026 Inove Piscinas. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#servicos" className="hover:text-white">
              ServiÃ§os
            </a>
            <a href="#projetos" className="hover:text-white">
              Projetos
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}



