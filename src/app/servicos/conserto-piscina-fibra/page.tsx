import { ServicePageLayout } from "@/components/ServicePageLayout";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conserto de Piscina de Fibra RJ",
  description:
    "Conserto de piscinas de fibra com reparo de fissuras, furos e vazamentos. Atendemos Rio de Janeiro e Niterói.",
};

const WHATSAPP_HREF = WHATSAPP_LINKS.consertoPiscina;

const description = [
  "O conserto de piscina de fibra é a solução ideal para resolver fissuras, furos, vazamentos e delaminações antes que o problema se agrave e cause danos maiores. A Inove Piscinas realiza o diagnóstico completo e aplica os reparos com materiais específicos para fibra de vidro, garantindo resistência e durabilidade.",
  "O processo começa com a identificação precisa do dano: mapeamos as fissuras, localizamos pontos de vazamento e avaliamos o estado geral da superfície. Só então iniciamos o reparo com laminação em fibra de vidro, resinas e produtos de alta aderência adequados para superfícies úmidas.",
  "Após o conserto estrutural, realizamos o acabamento com pintura de proteção, devolvendo a aparência original da piscina e criando uma barreira adicional contra infiltrações futuras. O resultado é uma piscina estruturalmente sólida, com superfície lisa e protegida.",
  "Atendemos residências, condomínios, hotéis e pousadas no Rio de Janeiro e Niterói. Entre em contato para agendar uma vistoria sem compromisso.",
];

const included = [
  "Diagnóstico e mapeamento de fissuras e furos",
  "Reparo estrutural com laminação em fibra de vidro",
  "Aplicação de resinas de alta aderência",
  "Tratamento de vazamentos e pontos de infiltração",
  "Acabamento e pintura de proteção",
  "Garantia de serviço",
];

const faq = [
  {
    question: "Como saber se minha piscina de fibra precisa de conserto?",
    answer:
      "Sinais comuns incluem manchas de umidade nas paredes ao redor da piscina, queda inexplicável no nível da água, fissuras visíveis na superfície e bolhas ou delaminação no fundo ou nas laterais.",
  },
  {
    question: "É possível consertar sem esvaziar a piscina completamente?",
    answer:
      "Depende do tipo e localização do dano. Pequenos reparos pontuais às vezes podem ser feitos com a piscina esvaziada parcialmente, mas para fissuras estruturais ou vazamentos sérios o esvaziamento total é necessário para garantir um reparo eficiente.",
  },
  {
    question: "Quanto tempo leva o conserto?",
    answer:
      "A maioria dos reparos é concluída em 1 a 3 dias, variando conforme o tamanho e a complexidade do dano. Após o reparo, aguardamos a cura completa dos materiais antes de encher novamente.",
  },
  {
    question: "O conserto resolve definitivamente o problema?",
    answer:
      "Sim, quando realizado corretamente com materiais adequados. Utilizamos resinas e laminados de fibra de vidro de alta performance que restabelecem a integridade estrutural da peça.",
  },
  {
    question: "Quanto tempo posso esperar antes de consertar uma fissura?",
    answer:
      "Quanto antes, melhor. Fissuras tendem a crescer com o tempo e com a pressão da água. Adiar o reparo pode transformar um problema simples em um dano estrutural muito mais caro de resolver.",
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

export default function ConsertoPiscinaFibraPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageLayout
        title="Conserto de Piscina de Fibra no Rio de Janeiro"
        subtitle="Reparo de fissuras, furos e vazamentos em piscinas de fibra com materiais de alta performance. Atendemos RJ e Niterói."
        description={description}
        included={included}
        faq={faq}
        beforeSrc="/imagens/conserto-piscina-depois.webp"
        afterSrc="/imagens/conserto-piscina-antes.webp"
        beforeAlt="Piscina de fibra antes do conserto"
        afterAlt="Piscina de fibra depois do conserto"
        whatsappHref={WHATSAPP_HREF}
        breadcrumbLabel="Conserto de Piscina de Fibra"
      />
    </main>
  );
}
