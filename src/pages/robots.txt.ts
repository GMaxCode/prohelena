// src/pages/robots.txt.ts
// Gera /robots.txt no build (Astro endpoint estático).
import { site } from '../data/site';

export const GET = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
