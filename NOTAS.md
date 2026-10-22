# Etapas de implementação

## v1 — Site institucional

Ver [`PLANO.md`](./PLANO.md) para o plano de implementação, pendências e critérios
de aceite. O `PLANO.md` é a fonte da verdade — qualquer divergência do código
para com ele precisa ser registrada lá.

## Stack

- Astro 4 (SSG, sem servidor)
- CSS nativo com `@layer`
- Fontes self-hosted via `@fontsource`
- Hospedagem prevista: Vercel (deploy direto conectado a este repo)

## Comandos

```bash
npm install              # instala deps
npm run dev              # dev server em :4321
npm run build            # build de produção → ./dist
npm run preview          # serve ./dist localmente
npm run optimize-photos  # regenera posters/og em public/photos/
npm run check-links      # HEAD check nos links oficiais
```

## Estrutura

```
src/
├── data/           Conteúdo editável (site.ts, passos.ts, links.ts)
├── styles/         CSS em camadas (tokens, reset, global)
├── layouts/        BaseLayout.astro
├── components/     Componentes Astro
├── pages/          Rotas (home, guia, política, 404, robots.txt, sitemap.xml)
└── assets/photos/  Fotos otimizadas via <Image>
public/
├── photos/         Imagem OG (gerada por optimize-photos.mjs)
└── favicon.svg
scripts/            Otimização de fotos + check-links
```
