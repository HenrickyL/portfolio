# Shell mobile

Base: `origin/develop` (`0eff81c`). Branch: `fix/mobile-shell`.

Alvo: celular estreito, em especial iPhone 16 (393×852) e Android comum (360 e 412 de largura). Desktop permanece o app-shell atual.

## O que a tela faz hoje

A página não rola. O documento está travado e só um pedaço interno rola.

1. `body` e `LayoutWrapper` usam `height: 100dvh` e `overflow: hidden`.
2. Abaixo de 680px o wrapper vira `column-reverse`. O menu, primeiro filho, cola no fundo da viewport.
3. O footer, no mesmo breakpoint, fica `position: absolute; bottom: 0` e cobre o menu.
4. `Container.Row` ocupa `height: 100%`. O card tem `min-height: 32rem` (~512px). O miolo (`LayoutContent`) tem `min-height: 0` e o próprio `overflow-y: auto`. O card não encolhe. O conteúdo da rota encolhe até a faixa que sobra e rola sozinho.
5. Esse miolo está com `width: 120%`, então também vaza na horizontal.
6. O tema está `absolute` embaixo à direita, em cima do footer. O aviso "Under construction" está `absolute` no topo e invade a foto.

No iPhone 16 sobra uma faixa curta para "Jogos e protótipos". Android sofre o mesmo, e a barra do Chrome ainda briga com `100dvh` travado.

## Comportamento alvo

Um scroll só: o da página.

Ordem visual no celular:

1. Faixa curta: aviso, idioma e tema, no fluxo.
2. Card compacto (foto, nome, contatos).
3. Conteúdo da rota.
4. Footer no fim do conteúdo.
5. Menu grudado no fundo, por cima do scroll, sem cobrir o texto do footer.

O menu continua acessível. Card e footer deixam de ser fixos. É navegação, não conteúdo.

Desktop (acima de 680px): duas colunas, scroll interno, footer no fluxo do shell. Sem regressão.

## Fora deste ajuste

- Lightbox do carrossel (`position: fixed`) continua fixo. É overlay.
- Textos, dados e rotas não mudam.
- Sem breakpoint novo. O corte segue 680px. iPhone 16 e os Androids citados cabem nele.

## Tasks

Não fatiar o shell. Footer, card, menu e overflow se seguram juntos. Um PR intermediário deixa o celular quebrado.

### Task 1 — Shell. Fazer primeiro. Sozinha resolve o print.

Arquivos:

- `src/styles/globalStyle.ts`
- `src/components/Layout/style.ts`
- `src/components/Layout/index.tsx`
- `src/components/Footer/FooterRoot/style.ts`
- `src/components/Container/ContainerRow/style.ts`
- `src/components/Perfil/PerfilContainer/style.ts`
- `src/components/Perfil/PerfilImage/style.ts`
- `src/components/ThemeToggle/index.tsx`
- `src/app/_menu/index.tsx`
- `src/components/Menu/MenuRoot/style.ts`

Regras, só em `max-width: 680px`:

- `body` e wrapper: `min-height: 100dvh`, altura automática, `overflow-x: hidden`, scroll vertical do documento. Tirar o cadeado `height: 100dvh; overflow: hidden`.
- Tirar `column-reverse`. Ele só servia para pregar o menu dentro da viewport travada.
- Footer: `position: static`. Entra depois do conteúdo.
- `Container.Row`: sem `height: 100%` e sem `overflow-y: auto`.
- Miolo: `width: 100%`, `overflow: visible`.
- Card: sem `min-height: 32rem` e sem `max-height: 36rem`. Menos padding. Foto menor que no desktop, para a primeira dobra mostrar o card e o começo da rota.
- Aviso, idioma e tema saem de `position: absolute` e vão para uma faixa no fluxo. O bloco hoje é estilo inline; vira styled component para o media query existir.
- Menu: `position: sticky; bottom: 0`, com `padding-bottom: env(safe-area-inset-bottom)`. A página ganha `padding-bottom` do tamanho do menu, para o footer terminar legível acima dele.
- `viewport-fit=cover` se o safe-area entrar. Next já manda viewport; ajustar o export se precisar.

### Task 2 — Só se a task 1 ainda prender alguma rota.

Não abrir antes de ver as rotas no celular.

Candidatos, se o scroll da página não bastar:

- `src/app/game-dev/[slug]/style.ts` — a ficha trava com `overflow: hidden` e corta em 800px, não em 680px.
- `src/components/MediaCarousel/style.ts` — `max-height: calc(100dvh - 16.5rem)` pode cortar a mídia depois que o shell rolar. O viewer fixo fica.

Home, scholar e projects já empilham entre 680 e 920. Rever depois da task 1. Não editar antes.

## Pronto quando

- iPhone 16 (393×852), Android 360×800 e 412×915.
- Rotas: `/`, `/game-dev`, `/scholar`, `/projects`, `/contact`. A ficha `/game-dev/[slug]` entra na task 2 se ainda travar.
- Card e footer sobem com o dedo. O menu permanece no fundo e não cobre o footer.
- Sem scroll horizontal.
- Desktop em 1280px: colunas, scroll interno e footer como hoje.
