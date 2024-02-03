module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:prettier/recommended",

    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: { jsx: true },
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },

  plugins: ["react-refresh", "react", "@typescript-eslint", "prettier"],

  ignorePatterns: ["dist", ".eslintrc.cjs"],

  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    indent: ["error", 2, { SwitchCase: 1 }],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "linebreak-style": ["error", "windows"],

    "react/react-in-jsx-scope": ["off"],
    "react/jsx-uses-react": ["off"],
    "react/jsx-props-no-spreading": ["warn"],
    "react/jsx-no-useless-fragment": ["warn"],
    "react/jsx-props-no-spreading": ["off"],
    "react/require-default-props": ["off"],
    "react-hooks/exhaustive-deps": ["warn"],
    "react/button-has-type": ["warn"],
    "no-param-reassign": ["error", { props: false }],
    "no-shadow": ["warn"],
    "import/prefer-default-export": ["off"],
    "import/no-extraneous-dependencies": ["warn"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};

