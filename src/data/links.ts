// src/data/links.ts
// INVENTÁRIO CENTRALIZADO DE LINKS OFICIAIS.
// Edite aqui pra atualizar Detran/Poupatempo/lojas/etc. sem mexer em layout.
// Quando um link cair, set `disabled: true` no item — o componente WppButton
// renderiza "Em breve" cinza (regra §12).

export type LinkOficial = {
  /** Identificador curto, único neste arquivo. */
  id: string;
  /** Texto visível no botão. */
  label: string;
  /** Para onde vai (subtítulo/meta, não visível no botão). */
  destino: string;
  /** URL canônica. */
  url: string;
  /** Se true, é link externo (target=_blank + rel=noopener noreferrer + ícone). */
  externo?: boolean;
  /** Flag de desativação manual (link morto ou pendente). */
  disabled?: boolean;
  /** Última checagem humana (ISO date). Atualizar quando validar. */
  verificadoEm?: string;
};

export const linksOficiais: LinkOficial[] = [
  {
    id: 'cnhBrasil_google',
    label: 'Baixar no Google Play',
    destino: 'App CNH do Brasil — Google Play',
    url: 'https://play.google.com/store/apps/details?id=br.gov.serpro.cnhe&hl=pt_BR',
    externo: true,
    verificadoEm: '2026-10-21',
  },
  {
    id: 'cnhBrasil_apple',
    label: 'Baixar na App Store',
    destino: 'App CNH do Brasil — App Store',
    url: 'https://apps.apple.com/br/app/cnh-do-brasil/id1275057217',
    externo: true,
    verificadoEm: '2026-10-21',
  },
  {
    id: 'poupatempo_biometria',
    label: 'Agendar biometria no Poupatempo',
    destino: 'Poupatempo — Coleta biométrica (primeira habilitação)',
    url: 'https://www.poupatempo.sp.gov.br/carta/5D26C3F6-A310-46CC-B3CA-488A23A92E5D',
    externo: true,
    verificadoEm: '2026-10-21',
  },
  {
    id: 'detran_prova_teorica',
    label: 'Agendar prova teórica no Detran-SP',
    destino: 'Detran-SP — Agendar ou cancelar exame teórico',
    url: 'https://www.detran.sp.gov.br/detransp/pb/servico/habilitacao/agendar_ou_cancelar_exame_teorico?id=carta_de_servico_agendar_ou_cancelar_exame_teorico',
    externo: true,
    verificadoEm: '2026-10-21',
  },
  // Pendente: URL do pagamento da taxa da prova prática ainda não informada.
  {
    id: 'detran_taxa_prova',
    label: 'Pagar taxa da prova prática',
    destino: 'Detran-SP — Taxas',
    url: 'https://www.detran.sp.gov.br/',
    externo: true,
    disabled: true,
  },
];

/** Lookup por id pra uso nos componentes. */
export function getLink(id: string): LinkOficial | undefined {
  return linksOficiais.find((l) => l.id === id);
}
