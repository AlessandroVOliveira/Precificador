# Phase 01: Foundation & Setup - Research

## Architecture Overview
A aplicação será uma Single Page Application (SPA) utilizando Vite + React. O foco principal desta fase é estabelecer um **Design System semântico** que suporte Glassmorphism e Dark Mode de forma nativa e performática.

## Tech Stack Details
- **Vite:** Build tool ultra-rápida.
- **React:** UI library.
- **Vanilla CSS:** Utilizaremos Variáveis CSS (Custom Properties) para gerenciar o tema.
- **Lucide React:** Conjunto de ícones leves e modernos.
- **Google Fonts:** Fontes 'Inter' ou 'Outfit' para um visual premium.

## Design Patterns (Glassmorphism & Dark Mode)
Baseado na pesquisa de tendências 2025:
1.  **Cores de Fundo:** Evitar preto puro (`#000000`). Usar tons profundos como `#0f172a` (Slate 950).
2.  **Efeito Glass:**
    *   `backdrop-filter: blur(12px)`.
    *   `background: rgba(255, 255, 255, 0.03)` para dark mode.
    *   `border: 1px solid rgba(255, 255, 255, 0.1)`.
3.  **Tipografia:** Texto principal em `#f1f5f9` (Slate 100) para evitar o brilho excessivo do branco puro.

## Validation Strategy (Nyquist)
- **Visual Testing:** Verificação manual de contraste em ambos os modos (Dark/Light).
- **Code Quality:** Garantir que não existam valores de cores "hardcoded" nos componentes, apenas variáveis.
- **Accessibility:** Checagem de contraste WCAG AA (4.5:1).

## Project Setup Command
```bash
npm create vite@latest . -- --template react
npm install
npm install lucide-react
```

## Folder Structure
```
src/
  assets/
  components/
    layout/
    ui/
  styles/
    globals.css
    tokens.css
  App.jsx
  main.jsx
```

---
*Phase: 01-foundation-setup*
*Research completed: 2026-05-03*
