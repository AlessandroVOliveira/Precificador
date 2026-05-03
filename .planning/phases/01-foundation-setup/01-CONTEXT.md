# Phase 01: Foundation & Setup - Context

**Gathered:** 2026-05-03
**Status:** Ready for planning

<domain>
## Phase Boundary
Esta fase estabelece a base técnica e visual do projeto Precificador. O objetivo é ter um ambiente React pronto para desenvolvimento, com um sistema de design moderno e a estrutura de layout básica.

### Deliverables
- Projeto Vite + React inicializado.
- Sistema de design (variáveis CSS) com suporte a Dark Mode.
- Componentes de layout (Header, Main, Footer).
- Configuração inicial do repositório.
</domain>

<decisions>
## Implementation Decisions

### Tech Stack
- **Framework:** Vite + React (Javascript).
- **Styling:** Vanilla CSS puro para flexibilidade e estética premium.
- **Iconography:** Lucide-React ou similar (sugestão do sistema).

### Design System
- **Tema:** Dark Mode por padrão.
- **Estética:** Glassmorphism (efeitos de desfoque de fundo), gradientes suaves, bordas arredondadas (premium feel).
- **Cores:** Paleta moderna (ex: Deep Blues/Purples com acentos Neon).

### the agent's Discretion
- Escolha da paleta exata de cores e fontes (sugerido Inter ou Outfit).
- Organização das pastas do projeto (`src/components`, `src/styles`, etc.).

</decisions>

<canonical_refs>
## Canonical References
- `manual_precificacao.md` — Regras de negócio para referência futura.
- `.planning/PROJECT.md` — Visão geral do projeto.
- `.planning/REQUIREMENTS.md` — Critérios de aceitação globais.
</canonical_refs>

<specifics>
## Specific Ideas
- Criar um "Price Card" mockado apenas para testar o design system nesta fase.
- Garantir que o Layout seja responsivo desde o início.
</specifics>

<deferred>
## Deferred Ideas
- Parsing de XML (Fase 2).
- Lógica de cálculo real (Fase 3).
- Persistência em LocalStorage (Fase 4).
</deferred>

---
*Phase: 01-foundation-setup*
*Context gathered: 2026-05-03*
