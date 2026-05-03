# Phase Context: 03-Pricing Engine & Business Logic

## Goal
Implement the core business logic for price formation based on the Markup Divisor formula and the specific rules in the pricing manual.

## User Review Required
- [ ] O sistema deve permitir margem zero ou negativa (para queima de estoque) ou deve haver um alerta? (Assumindo que permite com alerta).
- [ ] O rateio de frete na NFe já vem por item em muitos casos, mas se vier apenas no total, o rateio proporcional por valor é aceitável? (Assumindo que sim).

## Acceptance Criteria
- [ ] Implementação da utilidade `pricing.js` com a fórmula de Markup Divisor.
- [ ] Lógica para somar Encargos: `% Custo Fixo + % Impostos de Venda + % Margem`.
- [ ] Integração do estado de margem (Global vs Item).
- [ ] Cálculo dinâmico do preço de venda conforme as variáveis mudam.

## Decisions
- **Fórmula:** `Preço = Custo / (1 - % Encargos)`.
- **Encargos:** Representados como decimais (ex: 0.20 para 20%).
- **Rateio:** Se o XML não trouxer frete por item, o sistema deve ratear o frete total proporcionalmente ao valor bruto de cada item.

## Canonical References
- `manual_precificacao.md` — Seções 2, 3 e 4.
- `.planning/ROADMAP.md` — Phase 3 definition.

## Specific Ideas
- Criar um hook ou utilitário que recalcula tudo sempre que os itens ou as margens mudam (React pattern).
