# Inove Piscinas — Landing Page

Projeto de landing page moderna para a **Inove Piscinas**, focado em alta conversão, performance, acessibilidade e SEO.

## Visão Geral

Este projeto foi criado em **Next.js (App Router)** com **Tailwind CSS** e contém:

- Hero com slider de Antes/Depois.
- Cards de serviços com hover moderno.
- Galeria em bento grid com lightbox.
- Depoimentos com carrossel.
- Formulário validado com React Hook Form + Zod.
- SEO com `metadata` e JSON-LD para Local Business.
- CTA flutuante do WhatsApp.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form + Zod

## Como Rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Estrutura Principal

- `src/app/page.tsx` — Página principal.
- `src/app/layout.tsx` — Metadados e layout base.
- `src/app/globals.css` — Estilos globais e tokens de cor.
- `src/components/*` — Componentes da landing.

## SEO

O projeto utiliza:

- `next/metadata` com Open Graph.
- JSON-LD do tipo **LocalBusiness** no `page.tsx`.

## Contato (exemplo)

Os dados exibidos (telefone/e-mail) são exemplos e podem ser ajustados no componente:

- `src/components/ContactSection.tsx`

## Próximos Passos (opcional)

- Integrar envio real do formulário via API Route.
- Substituir imagens por fotos reais da Inove.
- Adicionar CMS (Sanity/Strapi) para conteúdo dinâmico.

---

© 2026 Inove Piscinas. Todos os direitos reservados.
