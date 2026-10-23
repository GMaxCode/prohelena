// src/data/site.ts
// CONFIG CANÔNICA DO SITE — tudo que é identidade morre aqui.
// Pra trocar número de WhatsApp, cidades atendidas, etc., é só editar este arquivo.

export const site = {
  /** Nome que aparece em títulos, JSON-LD, OG. */
  nome: 'Helena Dantas',
  /** Data da revisão editorial; alterar manualmente após revisar o conteúdo. */
  atualizadoEm: '2026-10-22',
  /** Umami: preencher os dois campos para ativar medição sem cookies. */
  analytics: { scriptUrl: '', websiteId: '' },
  /** Nome curto (ex.: nav, footer). */
  nomeCurto: 'Helena',
  /** Profissão/título usado em meta description e JSON-LD Person. */
  titulo: 'Instrutora autônoma de direção em Sumaré/SP e região',
  /** Descrição padrão da home (≤ 155 chars). */
  descricao:
    'Aulas práticas de carro em Sumaré/SP e região, para a primeira CNH ou para quem tem medo de dirigir. Você marca o ritmo; a Helena te acompanha.',
  /** URL canônica (sem barra final). */
  url: 'https://helenadantas.com.br',
  /** Localidade primária e cidades atendidas. */
  cidade: 'Sumaré',
  uf: 'SP',
  regiao: ['Sumaré', 'Hortolândia', 'Nova Odessa', 'Paulínia', 'Americana', 'Monte Mor'] as const,
  /** WhatsApp canônico — EDITAR AQUI muda todos os botões do site. */
  whatsappE164: '+5519993188336',
  whatsappFormatado: '+55 19 99318-8336',
  whatsappLink: 'https://wa.me/5519993188336',
  /** Mensagem pré-pronta do CTA principal do passo 6. */
  whatsappMensagemPadrao:
    'Olá Helena! Estou no passo 6 do guia de primeira habilitação, podemos conversar ?',
  /** Válido para o estado (aparece em rodapé e disclaimer). */
  validade: 'Válido para o estado de São Paulo',
  /** Email de contato (LGPD). Sem formulário, então é só um mailto. */
  emailContato: 'contato@helenadantas.com.br',
  /** Instagram oficial (@ sem o @). Trocar aqui muda todos os botões do site. */
  instagram: 'helenadantas72',
  /** Link completo do Instagram. */
  instagramLink: 'https://instagram.com/helenadantas72',
  /** Tags de cidades-irmãs para SEO local (H2 "cidades atendidas"). */
  cidadesIrmasLabel: 'Hortolândia, Nova Odessa, Paulínia e Americana',
} as const;

export type SiteConfig = typeof site;

/** Helper: monta link WhatsApp com mensagem opcional pré-preenchida. */
export function linkWhatsApp(mensagem?: string): string {
  const base = site.whatsappLink;
  if (!mensagem) return base;
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}
