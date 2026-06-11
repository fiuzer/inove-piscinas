# Configuração de Conversão — GTM + Google Ads

## Como funciona

Cada clique em qualquer botão de WhatsApp do site dispara automaticamente um evento no GTM via `dataLayer`:

```js
{
  event: "whatsapp_click",
  whatsapp_origem: "reform_piscina",   // identifica de qual botão/página veio
  whatsapp_numero: "5521993739579"
}
```

Valores possíveis de `whatsapp_origem`:

| Valor              | Origem                                      |
|--------------------|---------------------------------------------|
| `hero`             | Botão principal da Home                     |
| `header`           | Botão "Peça seu orçamento" (desktop)        |
| `header-mobile`    | Botão "Peça seu orçamento" (mobile)         |
| `floating`         | Botão flutuante (todas as páginas)          |
| `sobre-cta`        | Página Sobre                                |
| `projetos-cta`     | Página Projetos                             |
| `contato-hero`     | Página Contato                              |
| `service-hero-*`   | Hero de qualquer página de serviço          |
| `service-cta-*`    | CTA final de qualquer página de serviço     |

---

## 1. No GTM (tagmanager.google.com)

### Variável — capturar a origem

- Tipo: **Variável da camada de dados**
- Nome da variável da camada de dados: `whatsapp_origem`
- Nome da variável GTM: `DLV - whatsapp_origem`

### Gatilho

- Tipo: **Evento personalizado**
- Nome do evento: `whatsapp_click`
- Nome do gatilho: `Gatilho — Clique WhatsApp`

### Tag de Conversão Google Ads

- Tipo: **Google Ads — Conversão**
- Conversion ID: *(pegar em Google Ads → Ferramentas → Conversões)*
- Conversion Label: *(pegar em Google Ads → Ferramentas → Conversões)*
- Gatilho: `Gatilho — Clique WhatsApp`
- Nome da tag: `Tag — Conversão WhatsApp`

### Tag GA4 (se estiver usando Google Analytics 4)

- Tipo: **Google Analytics GA4 — Evento**
- Nome do evento: `whatsapp_click`
- Parâmetros adicionais:
  - `origem` → `{{DLV - whatsapp_origem}}`
- Gatilho: `Gatilho — Clique WhatsApp`
- Nome da tag: `Tag — GA4 Evento WhatsApp`

---

## 2. No Google Ads

1. Ferramentas → Conversões → **Nova conversão**
2. Tipo: **Site**
3. Nome: `Clique WhatsApp`
4. Categoria: **Contato**
5. Valor: deixar sem valor ou colocar o ticket médio
6. Janela de conversão: **30 dias**
7. Importar via GTM (não usar a tag direta do Google Ads)

---

## 3. Publicar e testar

1. No GTM: **Versão → Pré-visualizar**
2. Acesse o site com o GTM Preview ativado
3. Clique em qualquer botão de WhatsApp
4. No painel do GTM Preview, verifique se o evento `whatsapp_click` disparou
5. Confirme que a variável `DLV - whatsapp_origem` tem o valor correto
6. Se tudo estiver certo: **Enviar → Publicar**
