## Features

- 🎒 Vue 3 
- 🚀 Vite
- 🚇 pinia
- 🐟 TypeScript

## install

Using `npm` to install:

```bash
# install latest Vant for Vue 3 project
npm install selleri-ui
```

Using `yarn` or `pnpm`:

```bash
# with yarn
yarn add selleri-ui

# with pnpm
pnpm add selleri-ui
```

## Quickstart

```js
import { createApp } from 'vue';
// 1. Import the components you need
import { Button } from 'selleri-ui';
// 2. Import the components style
import 'selleri-ui/dist/style.css';

const app = createApp();

// 3. Register the components you need
app.use(Button);
```
