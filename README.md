# Site da Helena

Site institucional estático da Helena Dantas — instrutora autônoma de direção em Sumaré/SP. Site sem backend, sem coleta de dados, sem cookies.

## Stack

- **[Astro](https://astro.build/)** (SSG)
- CSS nativo com `@layer`
- Fontes via `@fontsource-variable` (self-hosted, sem Google Fonts no runtime)
- Hospedagem prevista: **Vercel**

## Estrutura

```
src/
├── assets/          Fotos e mídias (otimizadas no build)
├── components/      Componentes Astro (Hero, WppButton, Passos, ...)
├── data/            Conteúdo editável em um arquivo só
│   ├── site.ts
│   ├── passos.ts
│   └── links.ts
├── layouts/         Layouts compartilhados
├── pages/           Rotas (/, /primeira-habilitacao-sp, /politica-de-privacidade)
└── styles/          CSS em camadas (tokens, reset, global)
```

## Onde mexer

| Pra mudar... | Edita... |
|---|---|
| Número de WhatsApp | `src/data/site.ts` |
| Texto/copy dos 9 passos | `src/data/passos.ts` |
| Links oficiais (Detran, lojas, etc.) | `src/data/links.ts` |
| Cores da paleta | `src/styles/tokens.css` |
| Páginas | `src/pages/*.astro` |

## Scripts

```bash
npm install       # instala dependências
npm run dev       # dev server em http://localhost:4321
npm run build     # build de produção → ./dist
npm run preview   # serve o ./dist localmente
```

## Revisão e manutenção

Veja `CORRECOES.md` para alterações, fontes oficiais e pendências de negócio.
Atualize `site.atualizadoEm` somente após revisão editorial. Para ativar Umami,
preencha os dois campos de `site.analytics`; a política e os eventos já estão preparados.
O hero usa texto e CTA; a abertura é exibida uma vez por sessão.

## Planejamento

Veja [`PLANO.md`](./PLANO.md) para o plano de implementação completo, pendências e critérios de aceite.
