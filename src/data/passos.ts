// src/data/passos.ts
// ÚNICO ARQUIVO com o conteúdo do passo a passo de primeira habilitação em SP.
// Regra §12: botão com href vazio/undefined → renderiza desativado com "Em breve".
// Texto abaixo é RASCUNHO pra revisão da Helena antes de ir pro ar.

import { linkWhatsApp, site } from './site';
import { getLink } from './links';

export type VarianteBotao = 'cta-wpp' | 'cta-default' | 'cta-soft' | 'cta-store';

export type Botao = {
  /** Texto visível. */
  texto: string;
  /** href destino. Ausente/vazio → botão desativado. */
  href?: string;
  /** Se true (e href presente), vira link externo (target=_blank + rel + ícone). */
  externo?: boolean;
  /** Variantes visuais (ordem importa: 1ª = modificador principal). */
  variantes?: VarianteBotao[];
  /** aria-label extra para acessibilidade. */
  ariaLabel?: string;
};

export type Passo = {
  numero: number;
  titulo: string;
  descricao: string;
  botoes: Botao[];
  /** Caixa amarela de atenção. */
  destaque?: string;
};

const wpp = (texto = 'Falar com a Helena no WhatsApp'): Botao => ({
  texto,
  href: linkWhatsApp(site.whatsappMensagemPadrao),
  externo: true,
  variantes: ['cta-wpp'],
  ariaLabel: 'Abrir conversa no WhatsApp com a Helena Dantas',
});

const externo = (id: string, variantes: VarianteBotao[]): Botao => {
  const l = getLink(id);
  return {
    texto: l?.label ?? '',
    href: l && !l.disabled ? l.url : undefined,
    externo: true,
    variantes,
  };
};

export const passos: Passo[] = [
  {
    numero: 1,
    titulo: 'Curso teórico no app CNH do Brasil',
    descricao:
      'Baixe o app oficial CNH do Brasil (Serpro) e faça o curso teórico online — totalmente gratuito, no celular. São cerca de 45 horas/aula espalhadas por módulos curtos com prova final.',
    botoes: [externo('cnhBrasil_google', ['cta-store']), externo('cnhBrasil_apple', ['cta-store'])],
  },
  {
    numero: 2,
    titulo: 'Biometria no Poupatempo',
    descricao:
      'Assim que concluir o curso teórico, agende a coleta biométrica (foto, digitais e assinatura) no Poupatempo.',
    destaque: 'Leve seu RG e CPF no dia do atendimento.',
    botoes: [externo('poupatempo_biometria', ['cta-default'])],
  },
  {
    numero: 3,
    titulo: 'Prova teórica do Detran',
    descricao:
      'Com a biometria feita, agende a prova teórica no site do Detran-SP. São 30 questões de múltipla escolha — precisa acertar pelo menos 21.',
    botoes: [externo('detran_prova_teorica', ['cta-default'])],
  },
  {
    numero: 4,
    titulo: 'Exame psicológico',
    descricao:
      'Avaliação psicológica feita em clínica credenciada pelo Detran-SP. É um dos requisitos para liberar as aulas práticas.',
    botoes: [],
  },
  {
    numero: 5,
    titulo: 'Exame médico',
    descricao:
      'Avaliação de vista, audição e saúde geral, também em clínica credenciada. O exame toxicológico só é exigido para as categorias C, D e E — não vale para a CNH B.',
    botoes: [],
  },
  {
    numero: 6,
    titulo: 'Aulas práticas com a Helena',
    descricao:
      'Com os exames aprovados, você está liberado para dirigir. Você define quantas aulas quer fazer. O carro é da Helena (com duplo comando), e o ritmo é o seu — inclusive se você tem medo de dirigir. As aulas acontecem em Sumaré/SP e região: rua de verdade, trânsito de verdade.',
    destaque: 'Parabéns! Você já pode fazer suas aulas práticas.',
    botoes: [wpp()],
  },
  {
    numero: 7,
    titulo: 'Prova prática',
    descricao:
      'Quando você e a Helena acharem que tá na hora, agendamos a prova prática no Detran. Os valores estão na caixa “Quanto custa”, logo abaixo.',
    destaque:
      'Veículo do aluno (se for usar) precisa atender à Resolução Contran 1020/25. Com a Helena, você dirige o carro dela — sem preocupação.',
    botoes: [wpp(), externo('detran_taxa_prova', ['cta-default'])],
  },
  {
    numero: 8,
    titulo: 'Aprovação e emissão da CNH',
    descricao:
      'Aprovado na prática, o Detran emite a sua Permissão para Dirigir (PPD) — válida por 12 meses. Depois desse período, ela vira a CNH definitiva automaticamente. A emissão da CNH física tem taxa própria.',
    botoes: [],
  },
  {
    numero: 9,
    titulo: 'Acompanhamento opcional na prova',
    descricao:
      'Se você quiser, a Helena te acompanha no dia da prova prática — é só combinar antes pelo WhatsApp. A presença da instrutora não garante aprovação, mas ajuda a entrar mais calmo.',
    botoes: [wpp()],
  },
];

export const mensagemFinal =
  'Pronto! Agora você tem sua permissão para dirigir. Parabéns, condutor! Se quiser treinar mais para desenvolver novas habilidades, chame a Helena de volta.';
