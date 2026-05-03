# Plan: Phase 01 - Foundation & Setup

Estabelecer a base técnica e visual do Precificador utilizando Vite, React e um sistema de design moderno.

## Metadata
- **Wave:** 1
- **Depends On:** N/A
- **Files Modified:** `package.json`, `src/App.jsx`, `src/main.jsx`, `src/index.css` (delete), `src/App.css` (delete)
- **New Files:** `src/styles/tokens.css`, `src/styles/globals.css`, `src/components/layout/Shell.jsx`, `src/components/ui/GlassCard.jsx`
- **Autonomous:** true

## Requirements Addressed
- [ ] Inicialização do projeto Vite + React.
- [ ] Configuração do sistema de design (CSS Variables, Dark Mode, Typography).
- [ ] Estrutura básica de layout (Header, Content, Footer).

## Tasks

<task status="todo">
<read_first>
- .planning/phases/01-foundation-setup/01-RESEARCH.md
</read_first>
<action>
Inicializar o projeto Vite com template React no diretório atual e instalar dependências básicas.
</action>
<acceptance_criteria>
- O arquivo `package.json` existe e contém `react` e `vite`.
- `node_modules` está populado (após npm install).
- O comando `npm run dev` pode ser iniciado (não precisa rodar agora, apenas existir o script).
</acceptance_criteria>
</task>

<task status="todo">
<read_first>
- .planning/phases/01-foundation-setup/01-RESEARCH.md
</read_first>
<action>
Remover arquivos de estilo padrão do Vite e criar a estrutura de tokens CSS e estilos globais.
Implementar Variáveis CSS para Dark Mode e Glassmorphism em `src/styles/tokens.css`.
Configurar reset e tipografia em `src/styles/globals.css`.
</action>
<acceptance_criteria>
- `src/App.css` e `src/index.css` removidos.
- `src/styles/tokens.css` define variáveis como `--bg-main`, `--glass-bg`, `--text-primary`.
- `src/styles/globals.css` importa `tokens.css` e define o estilo do `body`.
</acceptance_criteria>
</task>

<task status="todo">
<read_first>
- src/main.jsx
- src/App.jsx
</read_first>
<action>
Atualizar `main.jsx` para importar os novos estilos globais e criar o componente `Shell` em `src/components/layout/Shell.jsx` que define a estrutura de Header, Main e Footer.
Criar um componente reutilizável `GlassCard` em `src/components/ui/GlassCard.jsx` para testar o efeito de glassmorphism.
</action>
<acceptance_criteria>
- `src/components/layout/Shell.jsx` existe e exporta um componente funcional.
- `src/components/ui/GlassCard.jsx` aplica os estilos de glassmorphism definidos nos tokens.
- `App.jsx` utiliza o `Shell` e exibe um `GlassCard` de boas-vindas.
</acceptance_criteria>
</task>

## Verification

### Automated Tests
- `npm run build` deve passar sem erros de lint ou tipos.

### Manual Verification
- Abrir o browser e verificar se o background é escuro e se o card central possui o efeito de desfoque (blur).
- Verificar se a fonte Inter/Outfit está sendo carregada corretamente.

## Must Haves
- [ ] Layout responsivo básico.
- [ ] Variáveis CSS funcionando para Dark Mode.
- [ ] Projeto rodando com `npm run dev`.
