# Phase Research: 05-Polish & UX Enhancements

## Micro-animations and Staggered Lists

Animações de entrada em listas (staggered) dão a sensação de que o conteúdo está sendo "construído" de forma fluida.
No CSS, isso pode ser feito via:
```css
.list-item {
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
}
.list-item:nth-child(1) { animation-delay: 0.1s; }
.list-item:nth-child(2) { animation-delay: 0.2s; }
/* ... */
```

## Data Visualization: Price Composition

Para mostrar como o preço de venda é formado, uma "Stacked Bar Chart" (barra empilhada) é ideal.
Cores sugeridas:
- **Custo de Aquisição**: Azul suave / Teal.
- **Encargos (Impostos + Fixo)**: Laranja / Âmbar.
- **Margem de Lucro**: Verde Esmeralda / Neon.

## Rich Aesthetics Audit
1. **Typography**: Garantir que o contraste está alto e o peso das fontes ajuda na hierarquia.
2. **Spacing**: Uso consistente de 4px/8px grid.
3. **Glassmorphism**: Ajustar `backdrop-filter` e `border` (1px solid rgba(255,255,255,0.1)) para o efeito de vidro perfeito.
4. **Icons**: Uso consistente de ícones da `lucide-react`.
