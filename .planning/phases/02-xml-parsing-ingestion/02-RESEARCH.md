# Phase Research: 02-XML Parsing & Ingestion

## Domain Research: NFe XML Structure (v4.00)

A NFe (Nota Fiscal Eletrônica) segue um esquema XML rigoroso. Para a precificação, os campos de interesse estão dentro do nó `<det>` (detalhamento), que se repete para cada item.

### Key Tags for Cost Calculation
- `<cProd>`: Código do produto.
- `<xProd>`: Descrição do produto.
- `<qCom>`: Quantidade comercializada.
- `<vUnCom>`: Valor unitário comercial.
- `<vProd>`: Valor total do item (bruto).

### Taxes & Expenses (Added to Cost)
- `<vIPI>`: Valor do IPI.
- `<vICMSST>`: Valor do ICMS Substituição Tributária.
- `<vFrete>`: Valor do frete atribuído ao item.
- `<vSeg>`: Valor do seguro.
- `<vOutro>`: Outras despesas acessórias.

### Namespace
O namespace padrão da NFe é `http://www.portalfiscal.inf.br/nfe`.

## Implementation Strategy
1. **File Ingestion**: Use `<input type="file" accept=".xml" />`.
2. **Reading**: `FileReader.readAsText()`.
3. **Parsing**: `new DOMParser().parseFromString(xml, "text/xml")`.
4. **Traversal**: Loop through `<det>` elements and use `getElementsByTagName`.

## Technical Constraints
- Browser compatibility for `DOMParser` (standard in all modern browsers).
- Memory limits for very large XMLs (NFe usually has few hundred items max, manageable).
