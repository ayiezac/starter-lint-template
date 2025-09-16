import antfu from "@antfu/eslint-config";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";

export default antfu(
  {
    type: "app",
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  },
  {
    ignores: [],
  },
  {
    languageOptions: {
      globals: {
        importScripts: "readonly",
      },
    },
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
      "unicorn/filename-case": "off",
    },
  },
  {
    ...html.configs["flat/recommended"],
    files: ["*.html", "*.shtml"],
    languageOptions: {
      parser: htmlParser,
      ...html.configs["flat/recommended"].languageOptions,
    },
    plugins: {
      html,
    },
    rules: {
      ...html.configs["flat/recommended"].rules,
      // "html/no-duplicate-class": "error",
      "style/spaced-comment": "off",
      "@html-eslint/use-baseline": ["warn", { available: "newly" }],
    },
  },
);
