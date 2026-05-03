# Phase Plan: 02-XML Parsing & Ingestion

Implementação do fluxo de importação e processamento de dados fiscais.

## Proposed Changes

### Core Utils
#### [NEW] [xmlParser.js](file:///c:/Users/aless/Documents/Precificador/src/utils/xmlParser.js)
- Implementação da função `parseNFeXML(xmlString)`.
- Extração de dados de produtos e impostos.
- Cálculo do Custo Unitário (CU) base para cada item.

### Components & UI
#### [MODIFY] [App.jsx](file:///c:/Users/aless/Documents/Precificador/src/App.jsx)
- Adicionar estado `items` para armazenar os produtos importados.
- Criar handler `handleFileUpload` para processar o arquivo selecionado.
- Atualizar o layout para mostrar a lista de itens quando carregada.

#### [MODIFY] [App.css](file:///c:/Users/aless/Documents/Precificador/src/App.css)
- Adicionar estilos básicos para a tabela/lista de itens importados.

## Task List
- [x] Criar utilitário `xmlParser.js`.
- [x] Implementar input de arquivo no `App.jsx`.
- [x] Integrar parsing com o estado do componente.
- [x] Estilizar visualização básica dos itens.

## Verification Plan

### Automated Tests
- Criar um script de teste simples para validar o parser com um XML mockado.

### Manual Verification
- Fazer upload de um XML real ou simulado e verificar se o nome e o custo dos itens aparecem corretamente no dashboard.
