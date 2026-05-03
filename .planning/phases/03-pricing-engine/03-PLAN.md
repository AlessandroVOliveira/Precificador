# Phase Plan: 03-Pricing Engine & Business Logic

Implementação do motor de cálculo e controles de margem.

## Proposed Changes

### Core Utils
#### [NEW] [pricing.js](file:///c:/Users/aless/Documents/Precificador/src/utils/pricing.js)
- Função `calculateSuggestedPrice(cost, fixedCost, salesTax, profitMargin)`.
- Função `calculateFixedCostPercentage(totalFixed, revenue)`.

### Components & UI
#### [MODIFY] [App.jsx](file:///c:/Users/aless/Documents/Precificador/src/App.jsx)
- Adicionar estados: `globalMargin`, `salesTax`, `marginType`, `itemMargins`.
- Implementar toggle para trocar entre modo Global e Por Item.
- Adicionar inputs na tabela para ajuste de margem individual no modo "Por Item".
- Integrar as funções do `pricing.js` no loop de renderização da tabela.

## Task List
- [x] Criar utilitário `pricing.js`.
- [x] Implementar estados de configuração de preço no `App.jsx`.
- [x] Criar UI de toggle para o modo de margem.
- [x] Implementar inputs de margem individual na tabela.
- [x] Validar cálculos com exemplos do manual.

## Verification Plan

### Automated Tests
- Testar a função `calculateSuggestedPrice` com os valores:
    - Custo: 10, Encargos: 50% -> Preço: 20.
    - Custo: 10, Encargos: 20% -> Preço: 12.50.

### Manual Verification
- Alterar a Margem Global e verificar se todos os preços na tabela atualizam instantaneamente.
- Ativar "Por Item", alterar a margem de um item específico e verificar se apenas o preço dele muda.
