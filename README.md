# Notas de aula - React - Introdução

## Informações gerais
- **Objetivo**: apresentar os conceitos básicos do React e publicar um aplicativo web no vercel
- **Público alvo**: alunos da disciplina de POS (Programação Orientada a Serviços) do curso de Infoweb (Técnico Integrado em Informática para Internet) no CNAT-IFRN (Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte - Campus Natal-Central)
- **Professor**: [L A Minora](https://github.com/leonardo-minora/)

## Pré-requisitos
1. Conta ativa no Github (todos nossos projetos serão via github)
2. Criar conta no [vercel](vercel.com)

## Tarefas

### Tarefas - 12/03
1. Fork desse respositório para sua conta github. Assim posso acompanhar quem esta fazendo.
2. No seu repositório, crie os arquivos abaixos
3. No vercel, crie um novo projeto importando o seu repositório
4. Siga as mudanças do [learn react](https://react.dev/learn) e acompanhe a cada _commit_ as modificações no vercel

**Conteúdo**
  - [Componentes react](https://react.dev/learn#components)
  - [JSX](https://react.dev/learn#writing-markup-with-jsx)
  - [css](https://react.dev/learn#adding-styles)
  - [código js/ts no jsx](https://react.dev/learn#displaying-data)

### Tarefas - 18/03
1. Acesse seu reposiório *fork*
2. Crie uma release com o nome **react-2024-03-12** para guardar suas tarefas anteriores do dia 12-03
3. Abra o VS Code
4. Clone o seu repositório *fork* para a máquina local
5. Abra no VS Code a pasta na máquina local do repositório
6. Instale as bibliotecas do projeto `npm install`
7. Execute a aplicação na máquina local `npm run dev`
8. Abra o navegador com o enderço (*url*) fornecida
9. Siga as mudanças do [learn react](https://react.dev/learn) e acompanhe a cada modificação local
10. Faça um *commit* e *push* para guardar as modificações e publica-las no repositório remoto
11. Verificar se a mudança foi instalada no vercel
12. Crie uma release com o nome **react-2024-03-18** para guardar suas tarefas anteriores do dia 18-03

**Conteúdo**
  - [código js/ts no jsx](https://react.dev/learn#displaying-data)
  - [renderização condicional](https://react.dev/learn#conditional-rendering)
  - [listas](https://react.dev/learn#rendering-lists)

### Tarefas - 19/03
**Conteúdo**
  - [respondendo a eventos](https://react.dev/learn#responding-to-events)
  - [estado](https://react.dev/learn#updating-the-screen)


### Tarefas - 25/03
1. Se ainda não criou, crie uma release com o nome **react-2024-03-18** para guardar suas tarefas anteriores do dia 18-03
2. Clone ou atualize seu repositório local do remoto (github)
3. Execute a aplicação na máquina local `npm run dev`
4. Adicione componente para adicionar tarefa (input text e input button)
5. Adicione função para escutar clique do botão e fazer um _output_ no log
6. Modifique a função de escuta para adicionar tarefa a lista de tarefas e observe a UI que não muda
7. Transforme o input de text (tarefa) em estado
8. Exporte os inputs como componente
9. DESAFIO continuar transformando a lista em estado
10. Crie uma release com o nome **react-2024-03-19** para guardar suas tarefas anteriores do dia 19-03

**Conteúdo**
  - [compartilhando dados entre componentes](https://react.dev/learn#sharing-data-between-components)
  

## Links
- nodejs
  - node version manager [nvm](https://github.com/nvm-sh/nvm) para instalar `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
- React
  - [react.dev](https://react.dev/)
  - [learn react](https://react.dev/learn)
  - [rocketseat playlist](https://youtube.com/playlist?list=PL85ITvJ7FLohz54DLfinJeHi7DrHGT2_U&si=pIByb6Z3iFRj5P-I)

## Arquivos

### package.json
```json
{
  "name": "ola-mundo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "@typescript-eslint/eslint-plugin": "^7.1.1",
    "@typescript-eslint/parser": "^7.1.1",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "typescript": "^5.2.2",
    "vite": "^5.1.6"
  }
}

```

### .eslintrc.cjs
```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

```

### .gitignore
```
# lock files
package-lock.json
yarn.lock

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

### index.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meu primeiro App React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

```

### tsconfig.node.json
```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}

```

### vite.config.ts
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

### src/App.tsx
```tsx
const App = () => {
  return (
    <div>
      <h1>Bem vindo ao mundo React</h1>
      <button>eu sou um botão html</button>
    </div>
  );
}

export default App;

```

### src/main.tsx
```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

### src/vite-env.d.ts
```ts
/// <reference types="vite/client" />

```
