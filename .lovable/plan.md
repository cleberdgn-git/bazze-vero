## Problema

O header atual tem um gradiente vertical que termina dentro dos seus próprios 80px de altura (`h-20`). Como o `backdrop-blur-[6px]` é aplicado em todo o elemento `<header>`, existe um corte visível na borda inferior do header: tudo acima fica desfocado, tudo abaixo fica nítido. Isso cria a "linha" perceptível que o usuário não quer.

## Solução

Eliminar a marcação suavizando tanto o gradiente quanto o blur, de forma que a transição entre header e hero seja imperceptível.

### Mudanças em `src/components/vero/Hero.tsx`

1. **Remover o `backdrop-blur` do `<header>`** — é o que cria a borda dura visível, já que o blur só acontece dentro da caixa do header.
2. **Trocar o gradiente do header por um fade muito mais sutil**, com cor mais transparente no topo e desaparecendo bem antes do fim do header:
   - `linear-gradient(to bottom, rgba(248,245,240,0.55) 0%, rgba(248,245,240,0.25) 50%, rgba(248,245,240,0) 100%)`
3. **Reforçar levemente a legibilidade dos logos/links** com um `text-shadow` discreto OU com um leve `drop-shadow` apenas nos elementos do nav, para compensar a remoção do blur sem voltar a poluir.

Resultado: o cabeçalho fica "flutuando" sobre a imagem sem nenhuma linha ou bloco perceptível, integrado ao gradiente geral do hero.

Nenhuma outra parte do componente é alterada.
