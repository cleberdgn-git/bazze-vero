## Objetivo

Fazer com que a seção "Parceria" volte a mostrar a imagem de fundo do hero (`hero-villa.jpg`), com o mesmo tratamento de fade horizontal usado no hero — em vez do fundo cremoso sólido (`var(--vero-bg)`) que está cobrindo tudo hoje.

## O que muda

Arquivo: `src/components/vero/Parceria.tsx`

1. **Remover o `backgroundColor` sólido** do `<section>` e o overlay "Top fade" atual (que já assume um fundo cor de creme).
2. **Adicionar a mesma imagem do hero como background absoluto** da seção (`<img src={heroImage} className="absolute inset-0 w-full h-full object-cover" />`), atrás de todo o conteúdo.
3. **Replicar o fade horizontal do hero** por cima da imagem, para que:
   - o lado esquerdo (texto + features) continue legível sobre o fundo cor de creme,
   - o lado direito (vídeo) deixe a imagem aparecer suavemente atrás.
   Gradiente igual ao do Hero:
   `linear-gradient(to right, var(--vero-bg) 0%, var(--vero-bg) 28%, rgba(248,245,240,0.88) 46%, rgba(248,245,240,0.35) 62%, rgba(248,245,240,0) 78%)`
4. **Mobile**: aplicar um fade vertical equivalente ao do hero, garantindo que os textos sigam legíveis em telas estreitas.
5. **Costura com o hero (topo) e com o que vier abaixo**: manter um fade suave no topo (de `rgba(248,245,240,0)` → continuação da cena) e adicionar um fade no rodapé voltando para `var(--vero-bg)`, para a próxima seção não ficar com corte seco.
6. Conteúdo (texto, lista de features, container do vídeo) permanece igual — z-index acima dos overlays.

Resultado: a transição entre Hero e Parceria deixa de ter aquela faixa cremosa vazia à esquerda do vídeo; a imagem da casa volta a aparecer suavemente como pano de fundo dessa seção, exatamente como no hero.

## Detalhes técnicos

- Reaproveitar o import já existente `import heroImage from "@/assets/hero-villa.jpg";`.
- Estrutura final do `<section>`:
  ```text
  <section relative overflow-hidden>
    <img heroImage absolute inset-0 object-cover />
    <div fade-horizontal (lg) absolute inset-0 />
    <div fade-vertical (mobile) absolute inset-0 />
    <div fade-top absolute />        // costura com hero
    <div fade-bottom absolute />     // costura com próxima seção
    <div relative z-10> ...conteúdo atual... </div>
  </section>
  ```
- Sem mudanças de tokens em `src/styles.css`, sem mudanças no Hero, sem alterar a lógica/estrutura do conteúdo (texto + vídeo).
