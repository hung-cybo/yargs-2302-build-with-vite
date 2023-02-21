/** @type {import('eslint/lib/shared/types').ConfigData} */
const config = {
  extends: "@cybozu/eslint-config/presets/node-typescript-prettier",
  env: {
    es2021: true,
    node: true,
    es6: true,
  },
  rules: {
    curly: ["error", "all"],
    "node/no-missing-import": "off",
    "import/no-unresolved": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    node: {
      resolvePaths: ["node_modules/@types"],
    },
  },
};

module.exports = config;
