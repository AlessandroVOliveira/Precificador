# Phase Context: 05-Polish & UX Enhancements

## Goal
Elevate the application's visual quality and user experience to a "premium" level through animations, data visualization, and a final aesthetic audit.

## User Review Required
- [ ] O usuário prefere animações discretas (fade/slide suave) ou algo mais dinâmico (spring/bounce)? (Assumindo suave para manter o ar profissional).
- [ ] Gráficos de pizza (composição de preço) são interessantes para cada item ou apenas um gráfico geral? (Assumindo por item em um popover ou expandível).

## Acceptance Criteria
- [ ] Animações de entrada para os itens da tabela (staggered effect).
- [ ] Transições suaves para abertura/fechamento de modais.
- [ ] Gráfico visual simples (barra ou pizza) mostrando a composição do preço (Custo vs Encargos vs Lucro).
- [ ] Auditoria final de cores, fontes e espaçamentos (Rich Aesthetics).

## Decisions
- **Animações:** Usar `framer-motion` se permitido, ou CSS puro com `@keyframes` e `staggered delays`. (Vou optar por CSS puro para manter leveza).
- **Gráficos:** Implementar uma barra de composição colorida dentro de cada linha da tabela.

## Canonical References
- `.planning/REQUIREMENTS.md` — Seção: Design Aesthetics & UI.
- `.planning/ROADMAP.md` — Phase 5 definition.

## Specific Ideas
- Efeito de hover nos cards de configuração com leve escala.
- Skeleton screen ou loading animado durante o parsing do XML.
