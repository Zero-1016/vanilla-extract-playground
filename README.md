# Vanilla Extract Playground

## vanilla-extract 설치

```bash
yarn add @vanilla-extract/css
```

### next.js plugin 설치

```bash
yarn add -D @vanilla-extract/next-plugin
```

```js
// next.config.js
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withVanillaExtract(nextConfig);
```

## Packages 설치

### sprinkles 설치

```bash
yarn add @vanilla-extract/sprinkles
```

### recipes 설치

```bash
yarn add @vanilla-extract/recipes
```

### dynamic 설치

```bash
yarn add @vanilla-extract/dynamic
```

### css-utils 설치

```bash
yarn add @vanilla-extract/css-utils
```
