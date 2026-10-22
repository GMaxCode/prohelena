# Revisão de 22/10/2026

## Implementado
- OG e Twitter usam /photos/og-default.jpg; robots aponta ao sitemap existente.
- Rodapé, sitemap e privacidade usam site.atualizadoEm, editável manualmente.
- Link real do exame prático, obtido do portal oficial. O botão descreve agendamento e consulta do pagamento, sem prometer pagamento direto.
- Abertura só na primeira visita da sessão; respeita redução de movimento, links com âncora e navegação voltar/avançar. Hero visível e H1 com CTA após a abertura. Sem JS, hero acessível sem a abertura.
- WhatsApp: verde #23743f e texto creme fixo, inclusive no tema escuro.
- FAQ, valores e passos com data de corte do toxicológico e fonte oficial. Exames médico/psicológico antes da prova teórica; mínimo de aulas B e solicitação da definitiva corrigidos.
- Hero antigo substituído; vídeo e poster sem uso removidos. PLANO.md já existe no ZIP e foi preservado como planejamento histórico.
- Removida a alegação de credenciamento da apresentação e do alt até confirmação pela Helena.

## Configuração pendente
- Umami: em src/data/site.ts, preencher analytics.scriptUrl e analytics.websiteId com os dados do painel. Os campos vazios não carregam tracker. O evento whatsapp_click está nos links de WhatsApp; a política acompanha automaticamente a ativação. Validar eventos no painel depois da configuração.
- Google Perfil da Empresa: criar/validar com a Helena; só adicionar URL verificada ao site.
- Confirmar credenciamento e obter autorização escrita para fotos dos alunos.
- O histórico local contém fotos de alunos de até 2,84 MB. Não foi consultada a visibilidade do repositório remoto nem reescrito o histórico. As fotos também fazem parte do site atual: limpar só o histórico não as torna privadas.
- Nenhum deploy ou push foi feito. Astro permaneceu na versão do projeto.

## Fontes oficiais consultadas
- https://www.poupatempo.sp.gov.br/carta/391270A7-15C2-4FC2-BE72-38C4D14B4A1C
- https://www.poupatempo.sp.gov.br/carta/1D5669D9-0BB1-4192-AE95-47613681F8D1
- https://www.detran.sp.gov.br/detransp/pb/servico/habilitacao/agendar_exame_pratico_de_direcao_veicular?id=carta_de_servico_agendar_exame_pratico_de_direcao_veicular
- https://docs.umami.is/docs/track-events

## Validação
- Build de produção concluído com sucesso.
- check-links: 5 links oficiais com HTTP 200.
- HTML gerado: H1 único por página, recursos e âncoras locais existentes, eventos nos links WhatsApp, tracker ausente sem configuração, datas fixas e OG/sitemap corretos.
- Contraste calculado creme/verde: 5,21:1. Não foi feita medição visual no navegador.
- Verificação de animação e layout no navegador não executada: o ambiente não disponibilizou Chromium e o download falhou. Revisar no celular antes do deploy.

## Uso
npm install
npm run build
npm run preview

O ZIP de entrega contém código e mídias atuais, sem node_modules, dist, caches, originais de fotos/vídeos e histórico .git. Para um repositório existente, aplique os arquivos na sua cópia local; exclua também public/videos/hero.mp4 e public/photos/irmaos-poster.jpg.
