# Phase Research: 03-Pricing Engine & Business Logic

## Business Logic: Markup Divisor

A técnica de Markup Divisor é preferível ao Markup Multiplicador porque calcula a margem sobre o **preço de venda final**, não sobre o custo. Isso garante que a margem de lucro líquida desejada seja preservada após o pagamento de todos os impostos e despesas variáveis.

### components of the Divisor
O divisor é calculado como: `1 - (∑ % Encargos)`.
Exemplo:
- Custo Fixo: 15%
- Impostos Venda: 10%
- Comissões: 5%
- Lucro Desejado: 20%
- **Total Encargos**: 50% (0.50)
- **Divisor**: 1 - 0.50 = 0.50.

### Price Calculation
Se o custo é R$ 10,00:
`Preço = 10,00 / 0.50 = R$ 20,00`.

## Implementation in React
1. **Shared State**: As margens e impostos de venda devem ser acessíveis globalmente ou passados para os componentes de linha da tabela.
2. **Dynamic Calculation**: O cálculo deve ser feito no render ou via `useMemo` para garantir performance.
3. **Validation**: Impedir que a soma de encargos chegue a 100% (divisor zero), o que causaria erro de divisão.

## Edge Cases
- **Divisor Zero/Negativo**: O preço tenderia ao infinito. O UI deve mostrar um aviso ou "N/A".
- **Itens com margens específicas**: O sistema deve priorizar a margem do item sobre a global se o modo "Por Item" estiver ativo.
