# Site — Patrícia Sacramento | Advocacia e Consultoria

Landing page de conversão para advocacia de família, sucessões e planejamento
patrimonial em Salvador/BA. Foco em conversão ética via WhatsApp e formulário.

## Stack

Vite + React 18 + Tailwind CSS + Framer Motion + lucide-react.
Renderização estática (SSG) via `prerender.mjs` para performance e SEO.

## Scripts

```bash
npm install
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # build estático -> dist/index.html
npm run preview  # serve o dist/ (http://localhost:4173)
```

## Estrutura

- `src/lib/site.js` — **dados centralizados** (contato, endereço, links,
  mensagens de WhatsApp, navegação). Edite só este arquivo para atualizar
  contato/links em todo o site.
- `src/lib/motion.js` — variantes de animação (fadeUp, stagger, parallax).
- `src/lib/analytics.js` — eventos de conversão para o Google Tag Manager
  (dataLayer): `whatsapp_click`, `form_submit`, `instagram_click`, `scroll_75`,
  `practice_area_click`.
- `src/components/` — uma seção por componente: Header, Hero, TrustBar,
  PainSection, PracticeAreas, Process, About, Education, ConversionQuiz, FAQ,
  Contact, Footer, WhatsAppFloatingButton.
- `public/img/` — imagens (retrato profissional em JPEG + WebP).

## Conformidade ética (advocacia)

O copy evita promessa de resultado, urgência artificial, preço/oferta, casos
concretos, símbolo da OAB e depoimentos. Mantém tom informativo e consultivo.
Rodapé com aviso de conformidade (Código de Ética e Disciplina da OAB).

## Antes de publicar

Ver checklist em `../CLIENTE.md` (OAB, GTM, domínio, autorização de imagem).
