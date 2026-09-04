# site bazze

Crie o hero section completo de um site de esquadrias de alto padrão chamado Vero · Bazze PVC.

LAYOUT — inspirado no site MAREV Villas:

Split 50/50: lado esquerdo com conteúdo textual, lado direito com imagem grande do projeto

Navbar fixa no topo com fundo off-white semitransparente

PALETA DE CORES:

Fundo: #F8F5F0 (off-white quente)

Texto principal: #1A1A18

Texto secundário: #6A6A66

Acento/dourado: #9A8A72

Botão primário: fundo #1A1A18, texto #F8F5F0

FONTES (Google Fonts):

Headlines: Cormorant Garamond, weight 400, estilo elegante/editorial

Corpo e UI: DM Sans, weight 300–500

NAVBAR:

Logo: ícone quadrado preto com "V" branco + texto "VERO · BAZZE PVC" em caps pequenas

Links: Parceria · Produtos · Vantagens · Obras · Contato

Botão direito: "ORÇAMENTO" com borda fina escura

LADO ESQUERDO (hero content):

Tag pequena com linha antes: — Parceira oficial Bazze PVC · Santa Maria

Headline grande em Cormorant Garamond: Esquadrias que definem a arquitetura (palavra "arquitetura" em itálico e cor #7A6A54)

Subtexto em DM Sans light: Projetadas, fabricadas e instaladas sob medida. Alto padrão em PVC pela maior indústria da América Latina.

Dois botões: primário "Solicitar orçamento →" + secundário "Ver obras realizadas →" (apenas sublinhado)

Stats abaixo de uma linha divisória fina: 22k m² parque fabril · PBQP-H único no RS · 100% sob medida

LADO DIREITO (imagem):

Imagem de fundo ocupa 100% do lado direito, object-fit: cover

Gradiente sutil escuro na parte inferior da imagem

Badge flutuante no canto inferior esquerdo da imagem: fundo branco semitransparente, texto ● Projeto executado pela Vero

Badge no canto superior direito: PBQP-H / Único no RS

IMAGEM: Usar a foto que vou anexar (residência de alto padrão com piscina, madeira, esquadrias em alumínio preto, vista para o mar).

RESPONSIVIDADE: Em mobile, empilhar verticalmente — imagem no topo (40vh), conteúdo abaixo.

ANIMAÇÕES SUAVES na entrada:

Conteúdo esquerdo: fade + slide-up com stagger (tag → headline → subtexto → botões → stats)

Imagem direita: fade-in com leve zoom-out no load

Gere o componente React completo com Tailwind CSS.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://bazze-vero.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4ee78a22-034f-498e-b797-f28876ec5d6a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
