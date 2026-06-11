import { ServicePageLayout } from "@/components/ServicePageLayout";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reforma de Banheira de Fibra no Rio de Janeiro",
  description:
    "Conserto e revitalização de banheiras de fibra no Rio de Janeiro. Equipe especializada, atendimento rápido e garantia de serviço.",
};

const WHATSAPP_HREF = WHATSAPP_LINKS.reformaBanheira;

const description = [
  "Banheiras de fibra são investimentos que, com o tempo, podem apresentar fissuras, manchas, perda de brilho ou danos estruturais. A Inove Piscinas oferece serviço completo de reforma de banheiras de fibra no Rio de Janeiro e Niterói.",
  "O processo começa com uma avaliação detalhada do estado da banheira. Nossa equipe identifica todos os pontos de dano — trincas, bolhas, desgaste de gel coat — e apresenta um diagnóstico honesto com o que é necessário para restaurar a peça.",
  "Utilizamos materiais de alta qualidade compatíveis com a estrutura de fibra de vidro, garantindo resistência à água quente, produtos de limpeza e ao uso cotidiano. O resultado é uma banheira com aparência renovada e superfície lisa, como se fosse nova.",
  "Nosso diferencial é o atendimento cuidadoso e o respeito ao ambiente do cliente. Trabalhamos com limpeza e organização, minimizando qualquer transtorno durante o serviço.",
];

const included = [
  "Avaliação completa da estrutura",
  "Conserto de fissuras e trincas",
  "Tratamento de bolhas e desgastes",
  "Aplicação de resina de fibra de vidro",
  "Acabamento e polimento final",
  "Garantia de serviço",
];

const faq = [
  {
    question: "A banheira precisa ser removida para a reforma?",
    answer:
      "Na maioria dos casos, a reforma é feita no local, sem necessidade de remoção. Avaliamos o acesso e confirmamos antes de iniciar.",
  },
  {
    question: "Qual é a diferença entre reforma e pintura de banheira?",
    answer:
      "A reforma foca em corrigir danos estruturais (fissuras, furos, bolhas), enquanto a pintura foca na revitalização estética. Muitas vezes os dois serviços são realizados juntos.",
  },
  {
    question: "Quanto tempo demora a reforma de uma banheira?",
    answer:
      "Em média de 1 a 3 dias úteis, dependendo do nível de dano. Após a avaliação, informamos o prazo exato.",
  },
  {
    question: "O serviço tem garantia?",
    answer:
      "Sim, todos os serviços têm garantia. O prazo é informado antes do início do serviço.",
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

export default function ReformaBanheiraFibraPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageLayout
        title="Reforma de Banheira de Fibra no RJ"
        subtitle="Conserto e revitalização de banheiras de fibra com equipe especializada, atendimento rápido e garantia."
        description={description}
        included={included}
        faq={faq}
        beforeSrc="/imagens/piscina4.webp"
        afterSrc="/imagens/piscina-antes4.webp"
        beforeAlt="Banheira de fibra antes da reforma"
        afterAlt="Banheira de fibra depois da reforma"
        whatsappHref={WHATSAPP_HREF}
        breadcrumbLabel="Reforma de Banheira de Fibra"
      />
    </main>
  );
}
