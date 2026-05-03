# Phase Context: 02-XML Parsing & Ingestion

## Goal
Implement the ability to read and extract product data from NFe XML files (v4.00) locally in the browser.

## User Review Required
- [ ] Confirmação de que apenas os impostos que agregam ao custo (IPI, ST) e frete/seguro devem ser considerados para o CU (Custo Unitário) nesta fase.

## Acceptance Criteria
- [ ] Componente de upload que aceita arquivos `.xml`.
- [ ] Parsing bem-sucedido de tags `det/prod` (cProd, xProd, qCom, vUnCom, vProd).
- [ ] Parsing de tags de impostos e despesas acessórias (vIPI, vICMSST, vFrete, vSeg, vOutro).
- [ ] Cálculo do CU (Custo Unitário) base: `(vProd + impostos + frete) / qCom`.
- [ ] Visualização básica dos itens importados em uma lista ou tabela simples.

## Decisions
- **Tecnologia:** `DOMParser` nativo do navegador para evitar dependências pesadas.
- **Segurança:** O processamento será 100% local (Client-side).
- **Escopo:** Focar na versão 4.00 da NFe (padrão atual).

## Canonical References
- `manual_precificacao.md` — Seção 1: Composição do Custo de Aquisição.
- `.planning/ROADMAP.md` — Phase 2 definition.

## Specific Ideas
- Usar um `FileReader` para ler o conteúdo do arquivo como texto antes de passar para o parser.
- Criar uma utilidade separada `xmlParser.js` para manter o código limpo.
