import { ServicePageLayout } from "@/components/ServicePageLayout";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reforma de Piscina de Fibra no Rio de Janeiro",
  description:
    "Conserto de fissuras, furos e revitalização completa de piscinas de fibra no Rio de Janeiro e Niterói. Orçamento pelo WhatsApp.",
};

const WHATSAPP_HREF = WHATSAPP_LINKS.reformaPiscina;

const description = [
  "A piscina de fibra é resistente e durável, mas com o tempo pode desenvolver fissuras, furos, bolhas e perda de cor. A Inove Piscinas é especialista em reforma de piscinas de fibra no Rio de Janeiro e Niterói há mais de 10 anos, com centenas de projetos entregues com garantia.",
  "Nossa equipe realiza uma avaliação completa da estrutura antes de iniciar qualquer serviço. Identificamos todos os pontos de dano — desde micro-fissuras que causam vazamento até áreas com deterioração do gel coat — e elaboramos um plano de reforma personalizado.",
  "Utilizamos materiais de alta performance compatíveis com a estrutura de fibra, garantindo aderência, flexibilidade e resistência à água clorada, ao sol e às variações de temperatura comuns no Rio de Janeiro.",
  "Ao final, sua piscina sai com aparência de nova, superfície lisa, sem rachaduras e com garantia de serviço. Atendemos Zona Sul, Zona Norte, Zona Oeste do Rio de Janeiro e cidades da Grande Niterói.",
];

const included = [
  "Avaliação completa da estrutura",
  "Conserto de fissuras e furos",
  "Tratamento de bolhas e descolamentos",
  "Aplicação de resina de fibra de vidro",
  "Acabamento e polimento final",
  "Garantia de serviço",
];

const faq = [
  {
    question: "Quanto tempo demora uma reforma de piscina de fibra?",
    answer:
      "O prazo varia de 3 a 7 dias úteis dependendo do nível de dano. Após a avaliação, informamos o prazo exato antes de iniciar o serviço.",
  },
  {
    question: "É necessário esvaziar a piscina para fazer a reforma?",
    answer:
      "Sim, a piscina precisa estar vazia e limpa para que a equipe possa trabalhar na estrutura de fibra com segurança e qualidade.",
  },
  {
    question: "Qual é a garantia do serviço de reforma?",
    answer:
      "Todos os serviços de reforma têm garantia. O prazo específico é informado antes do início do serviço, de acordo com o tipo de reparo realizado.",
  },
  {
    question: "Vocês atendem condomínios e hotéis?",
    answer:
      "Sim, atendemos residências, condomínios, hotéis e estabelecimentos comerciais no Rio de Janeiro e Niterói.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Entre em contato pelo WhatsApp (21) 99373-9579. Enviamos um técnico para avaliar a piscina sem custo e apresentamos o orçamento em até 24 horas.",
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

export default function ReformaPiscinaFibraPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageLayout
        title="Reforma de Piscina de Fibra no RJ"
        subtitle="Conserto de fissuras, furos e revitalização completa para devolver o brilho original à sua piscina."
        description={description}
        included={included}
        faq={faq}
        beforeSrc="/imagens/antes-depois-reforma-piscina2.png"
        afterSrc="/imagens/antes-depois-reforma-piscina1.png"
        beforeAlt="Piscina de fibra antes da reforma"
        afterAlt="Piscina de fibra depois da reforma"
        imagePosition="center calc(50% - 50px)"
        whatsappHref={WHATSAPP_HREF}
        breadcrumbLabel="Reforma de Piscina de Fibra"
      />
    </main>
  );
}
