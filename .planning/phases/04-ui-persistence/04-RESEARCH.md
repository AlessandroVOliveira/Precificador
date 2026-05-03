# Phase Research: 04-UI Dashboard & Persistence

## LocalStorage in React

O LocalStorage é uma API síncrona excelente para armazenar preferências de usuário e pequenos estados. Em React, o padrão ideal é criar um hook customizado que se comporte como um `useState`, mas que sincronize com o `window.localStorage`.

### Key Challenges
1. **Serialization**: Dados devem ser convertidos para JSON string.
2. **Sync**: Se o usuário abrir duas abas, as mudanças em uma podem não refletir na outra sem um listener de `storage`. (Para este projeto, um hook simples resolve 90% dos casos).
3. **Initial State**: Deve-se verificar se já existe algo no storage antes de usar o valor padrão.

## UI Components: Modals

Para manter o tema premium:
- **Overlay**: Fundo escurecido com `backdrop-filter: blur()`.
- **Content**: `GlassCard` com padding generoso.
- **Transitions**: CSS transitions para escala ou opacidade.

## Persistence Scope
- **Fixed Costs**: `total` (number), `revenue` (number), `percent` (number).
- **Margins**: `global` (number), `items` (object: { [id]: number }).
- **Sales Tax**: `value` (number).

O objetivo é que o usuário configure o custo fixo e a margem global uma única vez, e o sistema "lembre" disso nas próximas importações de XML.
