# Phase Plan: 04-UI Dashboard & Persistence

Implementação de persistência e interface de configuração.

## Proposed Changes

### Hooks
#### [NEW] [useLocalStorage.js](file:///c:/Users/aless/Documents/Precificador/src/hooks/useLocalStorage.js)
- Implementação de um hook que sincroniza estado com LocalStorage.

### Components
#### [NEW] [FixedCostsModal.jsx](file:///c:/Users/aless/Documents/Precificador/src/components/features/FixedCostsModal.jsx)
- Formulário para `Total Custo Fixo` e `Faturamento Esperado`.
- Cálculo automático do `%`.

#### [MODIFY] [App.jsx](file:///c:/Users/aless/Documents/Precificador/src/App.jsx)
- Trocar `useState` por `useLocalStorage` para as configurações.
- Integrar o modal de configuração de custos.
- Refinar a tabela para ser totalmente interativa.

## Task List
- [x] Criar hook `useLocalStorage`.
- [x] Implementar `FixedCostsModal`.
- [x] Migrar estados de configuração para persistência.
- [x] Adicionar botões de "Editar" nos cards de configuração.
- [x] Validar persistência após recarregar a página.

## Verification Plan

### Manual Verification
- Preencher os custos fixos, recarregar a página e verificar se os valores permanecem.
- Alterar a margem global, fechar o navegador, abrir novamente e verificar se o valor foi mantido.
- Verificar se o cálculo do preço sugerido na tabela usa os valores recuperados do storage.
