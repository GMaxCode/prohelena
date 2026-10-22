// src/data/valores.ts
// ÚNICA fonte dos valores exibidos no site. Informados pela Helena em 2026-10-21.
// Para atualizar um preço, edite só aqui.

export type Valor = {
  item: string;
  /** Texto já formatado (ex.: "R$ 52,83" ou "R$ 110 a R$ 180"). */
  valor: string;
  /** Observação curta exibida abaixo do item. */
  nota?: string;
};

export const valores: Valor[] = [
  { item: 'Prova teórica', valor: 'R$ 52,83' },
  { item: 'Exame psicológico', valor: 'R$ 90,00' },
  { item: 'Exame médico', valor: 'R$ 90,00' },
  { item: 'Taxa da prova prática', valor: 'R$ 52,83' },
  { item: 'Emissão da CNH física', valor: 'R$ 137,79' },
  {
    item: 'Exame toxicológico',
    valor: 'R$ 110 a R$ 180',
    nota: 'Só para as categorias C, D e E. Não é exigido para a categoria B.',
  },
];

export const valoresAviso =
  'Valores informados pela instrutora e sujeitos a alteração. Confirme sempre no portal oficial do Detran-SP. As aulas práticas são combinadas direto com a Helena pelo WhatsApp.';
