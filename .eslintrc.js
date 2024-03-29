module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@next/next/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:typescript-sort-keys/recommended"
    // "plugin:sort-keys-fix"
  ],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: ["tsconfig.json"]
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "@next/eslint-plugin-next",
    "prettier",
    "jest",
    "typescript-sort-keys",
    "sort-keys-fix"
  ],
  rules: {
    "sort-keys-fix/sort-keys-fix": "warn",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["CustomInputLabel"],
        labelAttributes: ["label"],
        controlComponents: ["CustomInput"],
        depth: 3
      }
    ],
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-shadow": 0,
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", disallowTypeAnnotations: false }
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/button-has-type": 0,
    "react/no-unstable-nested-components": [
      2,
      {
        allowAsProps: true
      }
    ],
    "react/no-array-index-key": 0,
    "no-param-reassign": 0,
    "no-restricted-syntax": 0,
    "@typescript-eslint/no-loop-func": 0,
    // "sort-keys": [1, "asc", { natural: true, allowLineSeparatedGroups: true }],
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-sort-props": [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: "last",
        ignoreCase: true,
        reservedFirst: true
      }
    ],
    "import/order": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/export": 0,
    "import/order": [
      2,
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal"
          }
        ],
        alphabetize: {
          order: "asc"
        }
      }
    ],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  }
};
