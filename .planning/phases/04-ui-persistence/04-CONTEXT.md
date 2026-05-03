# Phase Context: 04-UI Dashboard & Persistence

## Goal
Enhance the user experience by providing tools to configure business overheads and ensure that data is persisted across sessions using LocalStorage.

## User Review Required
- [ ] O LocalStorage é suficiente ou o usuário gostaria de uma opção para "Limpar tudo" (além do botão de limpar itens)? (Assumindo que sim).
- [ ] O modal de custos fixos deve ter categorias (aluguel, salários, etc.) ou apenas um campo de "Total"? (Assumindo campo total com descrição sugestiva).

## Acceptance Criteria
- [ ] Modal funcional para edição de Custos Fixos e Faturamento Esperado.
- [ ] Hook `useLocalStorage` para abstrair a lógica de persistência.
- [ ] Persistência de: `fixedCosts`, `globalMargin`, `salesTax` e `itemMargins`.
- [ ] Tabela interativa que reflete mudanças nos custos fixos imediatamente.

## Decisions
- **Persistência:** Apenas configurações e margens são persistidas. Os dados da NFe (itens) não são persistidos por questões de privacidade e volume de dados (importação deve ser feita a cada sessão se necessário, conforme solicitado no requisito original de "apenas local").
- **UI:** Manter a estética glassmorphism e usar modais com backdrop blur.

## Canonical References
- `manual_precificacao.md` — Seção 2: Levantamento do Custo Fixo Operacional.
- `.planning/ROADMAP.md` — Phase 4 definition.

## Specific Ideas
- Usar animações de entrada para o modal (fade-in).
- Adicionar um preview do `% Custo Fixo` calculado em tempo real dentro do modal.
