import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import _import from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettier from "eslint-plugin-prettier";
// import functional from "eslint-plugin-functional";
import tailwindcss from "eslint-plugin-tailwindcss";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      "plugin:jsx-a11y/strict",
      // "plugin:functional/no-mutations",
      "eslint:all",
      "plugin:react/all",
      "plugin:regexp/all",
      "plugin:unicorn/all",
      "plugin:@next/next/recommended",
      "plugin:security/recommended-legacy",
      "plugin:sonarjs/recommended-legacy",
      "plugin:json/recommended-legacy",
      "plugin:react-hooks/recommended",
      "plugin:promise/recommended",
      "plugin:eslint-comments/recommended",
      // "plugin:boundaries/recommended",
      "plugin:import/recommended",
      "plugin:@typescript-eslint/strict-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
      "plugin:import/typescript",
      "plugin:prettier/recommended",
    ),
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      "simple-import-sort": simpleImportSort,
      prettier: fixupPluginRules(prettier),
      // functional: fixupPluginRules(functional),
      tailwindcss,
    },

    languageOptions: {
      // parserOptions: {
      //   project: ["tsconfig.json"],
      // },
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "array-simple",
          readonly: "array-simple",
        },
      ],

      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: ["memberLike", "property", "parameter"],
          format: ["camelCase"],
        },
        {
          selector: ["typeLike"],
          format: ["PascalCase"],
        },
        {
          selector: ["function"],
          format: ["camelCase", "PascalCase"],
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["camelCase"],
          prefix: ["is", "should", "has", "can", "did", "will"],
        },
        {
          selector: [
            "classProperty",
            "objectLiteralProperty",
            "typeProperty",
            "method",
            "accessor",
            "enumMember",
          ],

          format: null,
          modifiers: ["requiresQuotes"],
        },
        {
          selector: "variable",
          modifiers: ["destructured"],
          format: null,
        },
      ],

      "@typescript-eslint/class-methods-use-this": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
          prefer: "type-imports",
        },
      ],

      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/init-declarations": "error",
      "@typescript-eslint/no-loop-func": "error",
      "@typescript-eslint/max-params": "error",
      "@typescript-eslint/no-empty-function": "off",

      "@typescript-eslint/no-explicit-any": [
        "error",
        {
          fixToUnknown: true,
        },
      ],

      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/parameter-properties": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment":
        "error",
      "@typescript-eslint/prefer-destructuring": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_$",
          varsIgnorePattern: "^_$",
          caughtErrorsIgnorePattern: "^_$",
        },
      ],

      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],

      "@typescript-eslint/switch-exhaustiveness-check": [
        "error",
        {
          requireDefaultForNonUnion: true,
        },
      ],

      "capitalized-comments": "off",
      "class-methods-use-this": "off",
      "consistent-return": "off",
      "default-param-last": "off",
      "func-style": "off",
      "prefer-destructuring": "off",
      "no-use-before-define": "off",
      // "functional/prefer-immutable-types": "off",
      // "functional/prefer-tacit": "off",
      // "functional/type-declaration-immutability": "off",
      "id-length": "off",
      "init-declarations": "off",
      "max-lines-per-function": "off",
      "max-params": "off",
      "max-statements": "off",
      "multiline-comment-style": "off",
      "no-loop-func": "off",
      "new-cap": "off",
      "sort-imports": "off",
      "sort-keys": "off",
      "no-duplicate-imports": "off",
      "no-magic-numbers": "off",
      "no-shadow": "off",
      "no-ternary": "off",
      "no-underscore-dangle": "off",
      "no-unused-expressions": "off",

      "no-void": [
        "error",
        {
          allowAsStatement: true,
        },
      ],

      "one-var": ["error", "never"],
      "import/consistent-type-specifier-style": "error",
      "import/no-unresolved": "off",
      "prettier/prettier": "warn",
      "promise/always-return": "off",
      "promise/catch-or-return": "off",
      "react/forbid-component-props": "off",

      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".jsx", ".tsx"],
        },
      ],

      "react/jsx-max-depth": "off",

      "react/jsx-no-bind": [
        "error",
        {
          allowArrowFunctions: true,
        },
      ],

      "react/jsx-no-constructed-context-values": "off",
      "react/jsx-no-leaked-render": "off",
      "react/jsx-no-literals": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-sort-props": "off",
      "react/no-multi-comp": "off",
      "react/no-unescaped-entities": "off",

      "react/prop-types": [
        "error",
        {
          ignore: ["className"],
        },
      ],

      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "security/detect-object-injection": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/no-null": "off",

      "unicorn/prefer-at": [
        "error",
        {
          checkAllIndexAccess: true,
        },
      ],

      "unicorn/prevent-abbreviations": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",

      parserOptions: {
        project: true,
      },
    },
  },
];

