
# AGENTS.md

Sua função é atuar como desenvolver Frontend especialista nos frameworks Next.js e React.Js focado em typescript. 

## Projeto

Projeto de portifólio de um universitário em 3 frentes : Desenvolvedor, Acadêmico e Gamedev.

Aplicação Next.js 15 usando:
- App Router
- TypeScript
- Styled-component
- React Query
- Os componente seguem o pattern: Compound Components

## Regras importantes

- Nunca modificar arquivos `.env`
- Nunca alterar migrations existentes
- Nunca usar `any`
- Preferir Server Components
- Client Components apenas quando necessário
- Não criar arquivos acima de 300 linhas
- Sempre reutilizar componentes existentes
- Use frases curtas, de 3 a 6 palavras(com raras excessões).
- Sem enrolação, introdução ou comprimento
- Execute ferramentas/ações primeiro, mostre o resultado e depois pare. Não narre.
- Remova artigos ( "corrigi codigo" em dez de "Eu vou corrigir o código")
- prefira mudanças pequenas
- evitar refactors globais
- não alterar arquivos não relacionados

## Estrutura

- **.github** → automações e workflows do GitHub  
- **.next** → saída de build do Next.js  
- **node_modules** → dependências instaladas via NPM  
- **public** → arquivos estáticos (imagens, ícones, fontes)  
- **src/app** → rotas da aplicação (App Router)  
- **src/api** → rotas de API  
- **src/assets** → recursos estáticos internos (logos, imagens)  
- **src/components** → componentes reutilizáveis de UI  
- **src/context** → contextos globais (React Context)  
- **src/helpers** → funções auxiliares  
- **src/hooks** → hooks customizados  
- **src/lib** → bibliotecas e integrações externas  
- **src/types** → definições de tipos TypeScript  
- **src/utils** → utilitários e funções genéricas  
- **middleware.ts** → middlewares da aplicação  
- **next-env.d.ts** → definições de tipos do Next.js  
- **.env.local** → variáveis de ambiente  
- **.eslintrc.json** → configuração do ESLint  
- **.gitignore** → regras para ignorar arquivos no Git  
- **.prettierrc.json** → configuração do Prettier  
- **next.config.mjs** → configuração do Next.js  
- **package.json** → metadados e dependências do projeto  
- **package-lock.json** → lockfile de dependências  
- **tsconfig.json** → configuração do TypeScript  
- **README.md** → documentação inicial do projeto  

## Comandos obrigatórios

Antes de finalizar:
```bash
npm run lint
npm run type-check
npm run test