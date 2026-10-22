// src/pages/sitemap.xml.ts
// Gera /sitemap.xml estático — sem dependência externa.
// @ts-check
import { site } from '../data/site';

const rotas: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/primeira-habilitacao-sp', priority: 0.9 },
  { path: '/politica-de-privacidade', priority: 0.3 },
];

export const GET = () => {
  const atualizadoEm = site.atualizadoEm;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rotas
  .map(
    (r) => `  <url>
    <loc>${site.url}${r.path}</loc>
    <lastmod>${atualizadoEm}</lastmod>
    <changefreq>${r.path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
