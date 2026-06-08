import { ServicePageLayout } from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pintura de Banheira de Fibra RJ",
  description:
    "Pintura e revitalização de banheiras de fibra com materiais de alta durabilidade. Atendemos Rio de Janeiro e Niterói.",
};

const WHATSAPP_HREF =
  "https://wa.me/5521993739579?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20pintura%20de%20banheira%20de%20fibra.";

const description = [
  "A pintura de banheira de fibra é a solução mais eficiente para renovar a aparência de uma banheira manchada, amarelada ou com brilho opaco, sem precisar substituir a peça. A Inove Piscinas realiza esse serviço com materiais específicos para fibra de vidro, garantindo resultado duradouro.",
  "Antes de aplicar qualquer produto, preparamos cuidadosamente a superfície: lixamento, limpeza e aplicação de primer de aderência. Esse preparo é o que diferencia um trabalho duradouro de um que descola em poucos meses.",
  "Trabalhamos com diferentes cores e acabamentos, do branco clássico ao off-white e tons de cinza. Ao final, a banheira fica com aparência de nova, superfície lisa e brilhante, com camadas de proteção contra manchas e desgaste.",
  "Atendemos residências, hotéis, pousadas e clínicas no Rio de Janeiro e Niterói. Entre em contato para agendar uma visita de avaliação sem compromisso.",
];

const included = [
  "Lixamento e preparo da superfície",
  "Tratamento de manchas e desgastes",
  "Aplicação de primer de aderência",
  "Pintura com tinta específica para fibra",
  "Acabamento liso e brilhante",
  "Garantia de serviço",
];

const faq = [
  {
    question: "É possível mudar a cor da banheira?",
    answer:
      "Sim, é possível mudar para outras cores. As opções mais procuradas são branco, off-white e cinza claro. Consulte-nos sobre as possibilidades.",
  },
  {
    question: "Quanto tempo dura a pintura de banheira de fibra?",
    answer:
      "Em média de 3 a 5 anos com uso normal e limpeza adequada. Produtos abrasivos e químicos fortes podem reduzir a durabilidade.",
  },
  {
    question: "A pintura suporta água quente de ofurô e spa?",
    answer:
      "Sim, utilizamos produtos resistentes ao calor e à umidade contínua, adequados para banheiras de hidromassagem e ofurô.",
  },
  {
    question: "Posso usar a banheira logo após a pintura?",
    answer:
      "O prazo de cura é de aproximadamente 48 a 72 horas. Informamos o prazo exato ao finalizar o serviço.",
  },
  {
    question: "O serviço é feito no local ou precisa levar a banheira?",
    answer:
      "O serviço é realizado no local, sem necessidade de remover a banheira, na maioria dos casos.",
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

export default function PinturaBanheiraFibraPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageLayout
        title="Pintura de Banheira de Fibra no Rio de Janeiro"
        subtitle="Pintura e revitalização de banheiras de fibra com materiais de alta durabilidade. Atendemos RJ e Niterói."
        description={description}
        included={included}
        faq={faq}
        beforeSrc="/imagens/piscina4.jpg"
        afterSrc="/imagens/piscina-antes4.jpg"
        beforeAlt="Banheira de fibra antes da pintura"
        afterAlt="Banheira de fibra depois da pintura"
        whatsappHref={WHATSAPP_HREF}
        breadcrumbLabel="Pintura de Banheira de Fibra"
      />
    </main>
  );
}
