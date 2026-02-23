# Inove Piscinas - Landing Page

Landing page institucional da **Inove Piscinas**, construída com foco em conversão, SEO técnico, responsividade e performance.

## Tecnologias

- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `Lucide React` (ícones)
- `React Hook Form + Zod` (validação)
- `Nodemailer` (envio de formulário por SMTP)
- `Google Tag Manager` (via `dataLayer`)

## Funcionalidades implementadas

- Hero responsivo com:
- título e CTA para WhatsApp
- comparador Antes/Depois (desktop e mobile)
- Header com menu desktop/mobile e transição por scroll
- Seção de serviços em cards
- Seção de projetos com:
- grid de capas
- modal em portal (`document.body`)
- alternância Antes/Depois
- lock de scroll ao abrir modal
- Seção de depoimentos com:
- autoplay
- swipe no mobile
- truncamento em 3 linhas + `Ver mais`/`Ver menos`
- altura estável do card
- Formulário de contato com:
- validação no cliente e no servidor
- sanitização de campos
- honeypot anti-spam
- envio SMTP

## Estrutura principal

- `src/app/layout.tsx`: metadata global, fontes e GTM
- `src/app/page.tsx`: composição da home
- `src/app/api/contact/route.ts`: endpoint de envio do formulário
- `src/components/*`: seções da landing
- `public/imagens/*`: imagens locais otimizadas

## Variáveis de ambiente

Crie `/.env.local` na raiz do projeto (`inove-piscinas`) com:

```env
SMTP_HOST=
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
MAIL_TO=
```

Notas:
- `MAIL_TO` é o e-mail que recebe os leads.
- `replyTo` usa o e-mail informado no formulário.

## Analytics e eventos

O GTM é carregado no layout e os eventos são enviados para `dataLayer`:

- `whatsapp_click`
- `form_submit`

Arquivo de referência: `src/app/layout.tsx` e componentes de CTA/form.

## Performance (estado atual)

- Carregamento progressivo de seções abaixo da dobra (`DeferredSections`)
- Redução de JS cliente removendo animações de runtime onde possível
- Imagens com `next/image` + `qualities` configuradas (`next.config.ts`)
- Modal de projetos renderizado via portal para comportamento estável no mobile

## Scripts

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Deploy (Vercel)

1. Conectar repositório
2. Configurar variáveis de ambiente no projeto Vercel
3. Deploy da branch principal

## Troubleshooting rápido

### Erro de quality no `next/image`

Se aparecer erro de qualidade não configurada, ajuste `images.qualities` em `next.config.ts`.

### Modal abrindo fora da área visível no mobile

O modal de projetos usa portal. Validar se `selected` está abrindo em `document.body` (`src/components/Gallery.tsx`).

---

Projeto mantido em evolução contínua com foco em conversão e estabilidade de produção.
