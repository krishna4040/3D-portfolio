import globals from "globals"
// import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  // pluginJs.configs.recommended,
  {
    ignores: ["frontend"],
  },
  eslintPluginPrettier,
]
