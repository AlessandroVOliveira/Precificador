# Precificador - Sistema de Formação de Preços

Aplicação web para cálculo de preço de venda e margem de lucro a partir de arquivos XML de Nota Fiscal Eletrônica (NFe), seguindo as regras de rateio e markup divisor.

## Core Value
Proporcionar clareza financeira imediata para comerciantes, automatizando o cálculo complexo de impostos, fretes e custos fixos para garantir a lucratividade desejada.

## Context
O usuário importa um XML de NFe, informa seus custos fixos e impostos de venda, e o sistema sugere o preço de venda ideal para cada produto.

## Stakeholders
- **Usuário Final:** Pequenos e médios comerciantes que precisam precificar mercadorias de forma estratégica.

## Tech Stack
- **Frontend:** React + Vite (Javascript)
- **Styling:** Vanilla CSS (Modern Aesthetics, Dark Mode, Glassmorphism)
- **State Management:** React Context / Hooks
- **Storage:** LocalStorage (para persistência de custos fixos)
- **XML Parsing:** Browser-side XML DOM Parser

## Requirements

### Validated
(Nenhum - fase inicial)

### Active
- [ ] Importação e parsing de XML de NFe (localmente no browser).
- [ ] Rateio proporcional de impostos (IPI, ST) e frete/seguro sobre os itens da nota.
- [ ] Cadastro e persistência de Custos Fixos em LocalStorage.
- [ ] Cálculo de Preço de Venda utilizando a fórmula do Markup Divisor.
- [ ] Toggle para definição de margem de lucro (Global vs. Por Item).
- [ ] Interface premium com visualização clara de todos os itens e preços sugeridos.

### Out of Scope
- Backend para armazenamento de dados em nuvem.
- Emissão de notas fiscais.
- Integração com ERPs externos.

## Key Decisions
| Decisão | Rationale | Outcome |
|----------|-----------|---------|
| Processamento Local | Velocidade e privacidade total dos dados fiscais do usuário. | — Pendente |
| LocalStorage | Evita necessidade de login/banco de dados mantendo praticidade. | — Pendente |
| Vanilla CSS | Máximo controle estético para criar uma experiência premium. | — Pendente |

## Evolution
Este documento evolui conforme novas funcionalidades de análise financeira forem necessárias.

---
*Last updated: 2026-05-03 after initialization*
