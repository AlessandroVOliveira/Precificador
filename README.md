# 🚀 Precificador Inteligente

O **Precificador** é uma ferramenta web moderna projetada para transformar suas Notas Fiscais Eletrônicas (NFe) em estratégias de precificação lucrativas. Com uma interface elegante e foco total em privacidade, ele ajuda empreendedores a calcularem o preço de venda ideal com base em custos reais.

![Banner](https://img.shields.io/badge/Status-Desenvolvimento-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Funcionalidades Principais

- **📂 Importação de XML (NFe v4.00)**: Carregue suas notas fiscais e extraia automaticamente dados de produtos, impostos (IPI, ICMS ST, etc.) e frete.
- **📊 Cálculo de Custo Real**: Distribuição proporcional de frete, seguro e outras despesas sobre o valor dos itens.
- **🏷️ Gestão de Margens**: Defina margens de lucro globais ou ajuste item por item conforme a estratégia do seu negócio.
- **📉 Simulação de Encargos**: Configure custos fixos mensais e impostos sobre a venda para visualizar o impacto no markup.
- **🔄 Recuperação de Créditos**: Opção para deduzir créditos de ICMS, PIS e COFINS do custo unitário.
- **🌓 Design Premium**: Interface em Dark Mode com estética glassmorphism, totalmente responsiva.

## 🔒 Privacidade e Segurança (Zero Cloud)

A sua segurança é nossa prioridade. O Precificador foi construído com a filosofia **Client-Side Only**:

1. **Processamento Local**: Os seus arquivos XML são lidos diretamente no seu navegador. **Nada é enviado para servidores externos.**
2. **Armazenamento no Navegador**: Suas configurações (custos fixos, margens) ficam salvas apenas no seu computador (via `localStorage`).
3. **Isolamento Total**: Ao hospedar o projeto, o servidor apenas entrega os arquivos. Os dados de cada usuário permanecem privados em suas respectivas máquinas.

---

## 🛠️ Como Usar

1. **Importar**: Clique em "Escolher Arquivo" e selecione o XML da sua NFe.
2. **Configurar**: Vá em "Configurações" (ícone de engrenagem) e informe:
   - Total de Custos Fixos mensais.
   - Faturamento Médio esperado.
   - Impostos sobre a Venda (Simples Nacional, taxas, etc.).
   - Margem de Lucro Global desejada.
3. **Analisar**: Veja na tabela o **Preço Sugerido** para cada item.
4. **Detalhar**: Clique na seta ao lado do produto para ver o detalhamento completo dos custos e créditos.

---

## 🚀 Desenvolvimento e Execução

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
# Instale as dependências
npm install
```

### Executando localmente
```bash
npm run dev
```

### Gerando build de produção
```bash
npm run build
```

---

## 🏗️ Stack Tecnológica

- **Core**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (Modern Design Tokens)
- **Icons**: Lucide React
- **Estética**: Glassmorphism & Deep Dark Theme

---

© 2026 Precificador. Desenvolvido para eficiência financeira e lucro real.
