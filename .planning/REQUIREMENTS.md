# Requirements - Precificador

## Functional Requirements

### RF01: Importação de XML
- O sistema deve permitir o upload de um arquivo `.xml` de NFe.
- O parsing deve ser feito inteiramente no lado do cliente.
- Deve extrair: Nome do item, Valor unitário, IPI, ST, Frete total, Seguro total e Descontos totais.

### RF02: Cálculo de Custo Unitário (CU)
- Implementar o rateio proporcional de custos acessórios (Frete, Seguro, Outras Despesas) e impostos de entrada (IPI, ST) sobre o valor nominal do item.
- Fórmula: `CU = Valor Nominal + Impostos (IPI + ST) + Rateio Proporcional (Frete + Seguro - Descontos)`.

### RF03: Gestão de Custo Fixo
- O usuário deve informar custos mensais (Aluguel, Salários, Software, etc.).
- O sistema deve calcular o % de Custo Fixo baseado no faturamento médio informado.
- Persistir esses valores no LocalStorage.

### RF04: Formação de Preço (Markup Divisor)
- Calcular o Preço de Venda usando a fórmula: `Preço = CU / (1 - % Encargos)`.
- `% Encargos = % Custo Fixo + % Impostos sobre Venda + % Margem de Lucro`.

### RF05: Margem de Lucro Flexível
- Botão toggle para alternar entre Margem Global (aplicada a todos os itens) e Margem por Item (campo editável na lista de itens).

### RF06: Dashboard de Resultados
- Listagem de todos os itens da nota com:
    - Preço de Custo Real.
    - Margem atual (se houver preço de venda sugerido).
    - Preço de Venda Sugerido.
    - Lucro Bruto por unidade.

## Non-Functional Requirements

### RNF01: Estética Premium
- Design moderno, dark mode por padrão, uso de gradientes e glassmorphism.
- Feedback visual para interações (hovers, transições suaves).

### RNF02: Performance
- Carregamento instantâneo do XML.
- Reatividade total nos cálculos ao alterar qualquer variável (custo fixo, margem).

### RNF03: Portabilidade
- Aplicação Single Page (SPA) funcional em navegadores modernos sem dependência de backend.

## User Acceptance Criteria (UAT)
1. **UAT1:** Ao importar o XML, a soma dos custos de todos os itens + rateios deve bater com o valor total da nota.
2. **UAT2:** Alterar o custo fixo deve atualizar instantaneamente todos os preços de venda sugeridos.
3. **UAT3:** O sistema deve lembrar os custos fixos após o refresh da página.
