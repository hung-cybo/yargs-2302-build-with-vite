# yargs-2302-build-with-vite

## Background

I'm using [Vite](https://github.com/vitejs/vite) to bundle my pure ESM application (It's a CLI tool).
After the cli tool is bundled, there is an error when executing the CLI

```
ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
```

## How to reproduce

Run the following commands:
1. `npm install`
2. `npm run build`
3. `./cli.js`