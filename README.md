<img alt="google-sheets-logo" src="./documentation/logo.png" />

[![Version](https://img.shields.io/npm/v/capitalize-lightweight)](https://www.npmjs.com/package/capitalize-lightweight)

2 lightweight helper functions to do `'helloWORLD' → 'Helloworld'` or `'helloWORLD' → 'HelloWORLD'`.

## Install

```
npm install --save capitalize-lightweight
```

Or via Yarn:

```
yarn add capitalize-lightweight
```

## Usage

```typescript
import { capitalize, capitalizeExtra } from "capitalize-lightweight";

const s1 = capitalize('helloWORLD');
console.log(s1); // => 'HelloWORLD'

const s2 = capitalizeExtra('helloWORLD');
console.log(s2); // => 'Helloworld'
```

## "wHy dO i NEeD A LiBrary FOr that?!"
You don't ofc. I wanted mine. Feel free to re-use it.
