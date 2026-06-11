import { ServicePageLayout } from "@/components/ServicePageLayout";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pintura de Piscina de Fibra RJ — Resistente ao Cloro",
  description:
    "Pintura profissional de piscinas de fibra com materiais resistentes ao cloro e ao sol. Acabamento premium e garantia de serviço. Atendemos RJ e Niterói.",
};

const WHATSAPP_HREF = WHATSAPP_LINKS.pinturaPiscina;

const description = [
  "A pintura de piscina de fibra vai além da estética: ela protege a estrutura contra a ação do cloro, raios UV e variações de temperatura. A Inove Piscinas utiliza tintas e resinas específicas para fibra de vidro, garantindo aderência superior e acabamento duradouro.",
  "Nossa equipe prepara a superfície com lixamento e tratamento adequados antes de aplicar qualquer produto. Esse processo é fundamental para que a tinta tenha aderência correta e não descole com o tempo — problema comum quando o serviço é feito com materiais inadequados ou sem o preparo certo.",
  "Azul piscina ou branco gelo, entregamos acabamento uniforme, liso e bonito, com camadas de proteção que garantem durabilidade no clima do Rio de Janeiro.",
  "Atendemos residências, condomínios e empreendimentos comerciais no Rio de Janeiro e Niterói. Após a avaliação, informamos o número de demãos necessárias e o prazo de execução.",
];

const included = [
  "Lixamento e preparo da superfície",
  "Tratamento de fissuras superficiais",
  "Pintura com tinta específica para fibra",
  "Aplicação de duas ou mais demãos",
  "Garantia de serviço",
];

const faq = [
  {
    question: "Quanto tempo dura a pintura de piscina de fibra?",
    answer:
      "Com os materiais certos e preparo adequado, a pintura dura em média de 3 a 5 anos, dependendo do uso, da manutenção química da água e da exposição ao sol.",
  },
  {
    question: "Posso escolher a cor da pintura?",
    answer:
      "Sim, trabalhamos com diversas cores. As mais procuradas são azul piscina, azul cobalto e branco. Consulte-nos sobre as opções disponíveis.",
  },
  {
    question: "A piscina precisa estar vazia para pintar?",
    answer:
      "Sim, a piscina deve estar vazia e com a superfície limpa e seca para garantir a aderência da tinta.",
  },
  {
    question: "Quanto tempo depois da pintura posso encher a piscina?",
    answer:
      "Geralmente após 48 a 72 horas da última demão, conforme a cura do produto utilizado. Informamos o prazo correto ao final do serviço.",
  },
  {
    question: "Vocês fazem pintura de piscina de alvenaria também?",
    answer:
      "Trabalhamos principalmente com piscinas e banheiras de fibra. Entre em contato para verificar disponibilidade para outros tipos.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function PinturaPiscinaFibraPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageLayout
        title="Pintura de Piscina de Fibra no Rio de Janeiro"
        subtitle="Pintura profissional com materiais resistentes ao cloro e ao sol, com acabamento premium e garantia."
        description={description}
        included={included}
        faq={faq}
        beforeSrc="/imagens/pintura-piscina-antes.webp"
        afterSrc="/imagens/pintura-piscina-depois.webp"
        beforeAlt="Piscina de fibra antes da pintura"
        afterAlt="Piscina de fibra depois da pintura"
        whatsappHref={WHATSAPP_HREF}
        breadcrumbLabel="Pintura de Piscina de Fibra"
      />
    </main>
  );
}
