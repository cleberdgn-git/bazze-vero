## Objetivo

Transformar o hero atual (layout de 2 colunas: texto à esquerda, imagem à direita) em um hero full-width onde a imagem da villa ocupa toda a largura como background, com gradiente da esquerda para a direita (lado do texto mais claro/legível, lado da imagem revelado), inspirado no layout da referência MAREV.

A imagem se estende também por trás do cabeçalho (header transparente sobreposto), com um gradiente próprio no header para garantir legibilidade dos logos e links de navegação.

## Mudanças em `src/components/vero/Hero.tsx`

**1. Header**
- Remover o background sólido bege (`rgba(248, 245, 240, 0.78)`) e o `border-b`.
- Aplicar gradiente vertical sutil (de bege semi-opaco no topo → transparente embaixo) para garantir contraste com os logos sem poluir.
- Manter `backdrop-blur` leve.
- Posição continua `fixed`, sobrepondo a imagem.

**2. Seção Hero**
- Remover o grid de 2 colunas. A `<section>` passa a ser um container relativo full-width com `min-h-screen`.
- A imagem `hero-villa.jpg` vira camada absoluta de fundo cobrindo 100% da largura/altura, começando do topo da página (atrás do header).
- Adicionar duas camadas de gradiente sobre a imagem:
  - Gradiente horizontal: `linear-gradient(to right, var(--vero-bg) 0%, var(--vero-bg) 25%, rgba(248,245,240,0.85) 45%, transparent 70%)` — replica o efeito de fade da referência MAREV.
  - Gradiente vertical sutil no topo para reforçar a área do header.
- Conteúdo de texto (eyebrow, h1, parágrafo, botões, stats) fica em uma camada acima, alinhado à esquerda dentro de um container `max-w-[1400px]`, com padding equivalente ao do navbar.

**3. Badges flutuantes**
- Os dois badges atuais ("PBQP-H / Único no RS" e "Projeto executado pela Vero") são reposicionados sobre a área visível da imagem (canto direito superior e canto direito inferior), mantendo o estilo blur/borda.

**4. Responsivo**
- Mobile: o gradiente horizontal vira gradiente vertical mais forte (texto sobre área inferior escurecida ou clareada conforme legibilidade), preservando a leitura.
- Container do conteúdo limitado a `max-w-xl` no desktop.

## Detalhes técnicos

- Usar tokens existentes: `--vero-bg`, `--vero-ink`, `--vero-muted`, `--vero-gold`, `--vero-gold-deep`.
- Animações `vero-fade-up` e `vero-image-in` permanecem.
- Nenhuma mudança em outros componentes ou em CSS global; tudo via inline style/classes Tailwind no Hero.
