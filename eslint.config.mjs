// eslint.config.mjs
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/node_modules"],
}, ...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.commonjs,
            ...globals.node,
        },

        ecmaVersion: 2020,
        sourceType: "commonjs",

        parserOptions: {
            // project: "./tsconfig.eslint.json",
            project: path.resolve(__dirname, './tsconfig.eslint.json'),  // Ensure the correct path is used here
        },
    },

    rules: {
        "ban-types": "off",
        quotes: ["error", "single"],
        "no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
        "import/no-extraneous-dependencies": [0],
        "import/extensions": [0],
        "array-bracket-newline": "off",
        "array-element-newline": "off",
        "arrow-body-style": "error",
        "block-scoped-var": "error",
        complexity: "error",
        "constructor-super": "error",
        camelcase: "off",
        curly: "error",
        "default-case": "off",
        "no-case-declarations": "off",
        "dot-notation": "error",
        "eol-last": ["error", "always"],
        eqeqeq: "error",
        "guard-for-in": "off",
        "global-require": "off",

        indent: ["warn", 2, {
            SwitchCase: 1,
        }],

        "linebreak-style": "off",
        "max-classes-per-file": "off",

        "newline-per-chained-call": ["error", {
            ignoreChainWithDepth: 3,
        }],

        "new-parens": "error",
        "no-alert": "error",
        "no-duplicate-imports": "error",
        "no-nested-ternary": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-underscore-dangle": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "off",
        "no-else-return": "error",
        "no-empty": "off",
        "no-plusplus": "off",
        "no-empty-functions": "off",
        "consistent-return": "off",
        "no-dynamic-require": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",

        "max-len": ["error", {
            ignoreRegExpLiterals: true,
            ignoreUrls: true,
            comments: 130,
            code: 130,
        }],

        "no-magic-numbers": ["off", {
            ignoreArrayIndexes: true,
        }],

        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-new": "error",
        "comma-dangle": "off",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "warn",
        "no-proto": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-restricted-syntax": "off",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "no-void": "error",
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "padding-line-between-statements": "error",
        "prefer-const": "error",
        "prefer-object-spread": "warn",
        "quote-props": ["error", "as-needed"],
        radix: "error",
        "require-await": "error",

        "sort-imports": ["error", {
            ignoreCase: true,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
        }],

        "space-before-function-paren": ["error", {
            anonymous: "never",
            asyncArrow: "always",
            named: "never",
        }],

        "use-isnan": "error",
        "wrap-iife": "error",
        yoda: "error",
    },
}, {
    files: ["**/*.test.js", "**/*.test.ts", "**/jest.config.js"],

    languageOptions: {
        globals: {
            ...globals.jest,
        },
    },
}];
