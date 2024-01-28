// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs

/** @type {import("prettier").Config} */
const config = {
  arrowParens: "always",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  singleQuote: false,
  semi: false,
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "es5",
}

module.exports = config
