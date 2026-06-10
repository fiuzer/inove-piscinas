import { ServicePageLayout } from "@/components/ServicePageLayout";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reforma de Piscina de Fibra no Rio de Janeiro",
  description:
    "Dê adeus ao visual desbotado da sua piscina com nossa reforma de piscinas de fibra profissional devolvendo brilho e proteção.",
};

const WHATSAPP_HREF = WHATSAPP_LINKS.reformaPiscina;

const description = [
  "A piscina de fibra é resistente e durável, mas com o tempo pode desenvolver fissuras, furos e perda de cor. A Inove Piscinas é especialista em reforma de piscinas de fibra no Rio de Janeiro e Niterói há mais de 10 anos, com centenas de projetos entregues com garantia.",
  "Nossa equipe realiza uma avaliação completa da estrutura antes de iniciar qualquer serviço. Identificamos todos os pontos de dano — desde fissuras que causam vazamento até áreas com deterioração — e elaboramos um plano de reforma personalizado.",
  "Utilizamos materiais de alta performance compatíveis com a estrutura de fibra, garantindo aderência, flexibilidade e resistência à água clorada, ao sol e às variações de temperatura comuns no Rio de Janeiro.",
  "Ao final, sua piscina sai com aparência de nova, superfície lisa, sem rachaduras e com garantia de serviço. Atendemos Zona Sul, Zona Norte, Zona Oeste do Rio de Janeiro e cidades da Grande Niterói.",
];

const included = [
  "Avaliação completa da estrutura",
  "Conserto de fissuras e furos",
  // "Tratamento de bolhas e descolamentos",
  "Aplicação de resina de fibra de vidro (Caso necessário)",
  "Acabamento brilhoso e proteção final",
  "Garantia de serviço",
];

const faq = [
  {
    question: "Quanto tempo demora uma reforma de piscina de fibra?",
    answer:
      "O prazo varia de 2 a 3 dias dependendo do estado da piscina. Após a avaliação, informamos o prazo exato antes de iniciar o serviço.",
  },
  {
    question: "É necessário esvaziar a piscina para fazer a reforma?",
    answer:
      "Sim, a piscina precisa estar vazia e limpa para que a equipe possa trabalhar na estrutura de fibra com segurança e qualidade.",
  },
  {
    question: "Qual é a garantia do serviço de reforma?",
    answer:
      "Todos os serviços de reforma têm garantia. O prazo específico é informado antes do início do serviço, de acordo com o tipo de realizado.",
  },
  {
    question: "Vocês atendem condomínios e hotéis?",
    answer:
      "Sim, atendemos residências, condomínios, hotéis e estabelecimentos comerciais no Rio de Janeiro e Niterói.",
  },
  {
    question: "Como solicitar um orçamento?",
    answer:
      "Entre em contato pelo WhatsApp (21) 99373-9579. Enviamos um orçamento claro e detalhado da piscina sem custo em até 24 horas para o cliente.",
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
        subtitle="Dê adeus ao visual desbotado da sua piscina com nossa reforma de piscinas de fibra profissional devolvendo brilho e proteção."
        description={description}
        included={included}
        faq={faq}
        beforeSrc="/imagens/antes-depois-reforma-piscina2.png"
        afterSrc="/imagens/antes-depois-reforma-piscina1.png"
        beforeAlt="Piscina de fibra antes da reforma"
        afterAlt="Piscina de fibra depois da reforma"
        imageYOffset="-8%"
        imageScale={1.15}
        whatsappHref={WHATSAPP_HREF}
        breadcrumbLabel="Reforma de Piscina de Fibra"
      />
    </main>
  );
}
