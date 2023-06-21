module.exports = {
  ignorePatterns: ["build", "node_modules", ".cache"],
  overrides: [
    {
      files: ['*.json'],
      extends: [
        "plugin:jsonc/recommended-with-json",
      ],
    },
    {
      files: ['webpack.config.js'],
      env: {
        es2021: true,
        commonjs: true,
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'type',
              'version',
              'private',
              'packageManager',
              'description',
              'keywords',
              'license',
              'author',
              'repository',
              'funding',
              'main',
              'module',
              'types',
              'unpkg',
              'jsdelivr',
              'exports',
              'files',
              'bin',
              'sideEffects',
              'scripts',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'husky',
              'lint-staged',
              'eslintConfig',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' },
          },
        ],
      },
    },
    {
      files: ['src/**/*.js'],
      parser: "@babel/eslint-parser",
      extends: [
        "eslint:recommended",
        "airbnb-base",
        "plugin:node/recommended",
        "prettier",
      ],
      env: {
        commonjs: true,
        es2021: true,
        node: true,
        browser: false,
      },
      excludedFiles: [
        '*.tests.js',
        'src/admin/**/*.js',
        '**/admin/src/**/*.js',
      ],
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: false,
        },
      },
      globals: {
        strapi: true,
      },
      rules: {
        strict: ["error", "global"],
        // airbnb overrides
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "node/no-missing-require": "off",
        "node/no-extraneous-require": "off",
        "no-continue": "off",
        "no-restricted-syntax": [
          "error",
          {
            selector: "LabeledStatement",
            message:
              "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
          },
          {
            selector: "WithStatement",
            message:
              "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
          },
        ],
    
        // strapi backend rules
        "no-param-reassign": ["error", { props: false }],
        "global-require": "off",
        "no-return-await": "error",
        "object-shorthand": [
          "error",
          "always",
          { avoidExplicitReturnArrows: true },
        ],
        "import/order": "error",
        "import/no-cycle": "error",
        "import/no-useless-path-segments": "error",
        "import/first": "error",
        "import/newline-after-import": "error",
        "node/exports-style": ["error", "module.exports"],
        "node/no-new-require": "error",
        "node/no-path-concat": "error",
        "node/no-callback-literal": "error",
        "node/handle-callback-err": "error",
        "one-var": ["error", "never"],
      },
    },
    {
      files: ['src/admin/**/*.js', '**/admin/src/**/*.js'],
      excludedFiles: [
        'src/admin/webpack.config.js',
      ],
      plugins: ["react", "react-hooks", "import", "jsx-a11y"],
      // parser: "@babel/eslint-parser",
      extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier",
      ],
      env: {
        node: false,
        browser: true,
        commonjs: false,
        es2021: true,
        jest: true,
        mocha: true,
      },
      globals: {
        strapi: true,
      },
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
      rules: {
        strict: ["error", "never"],
        "import/no-unresolved": 0,
        "import/extensions": ["off"],
        "generator-star-spacing": 0,
        "no-console": 0,
        "require-atomic-updates": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "arrow-body-style": 0,
        "arrow-parens": 0,
        camelcase: 0,
        "comma-dangle": 0,
        "consistent-return": [
          2,
          {
            treatUndefinedAsUnspecified: true,
          },
        ],
        "template-curly-spacing": 0,
        "func-names": ["error", "never"],
        "function-paren-newline": 0,
        "implicit-arrow-linebreak": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/order": 2,
        "import/prefer-default-export": "off",
        "jsx-a11y/click-events-have-key-events": 1,
        "max-len": [
          2,
          {
            code: 120,
            ignoreComments: true,
            ignoreUrls: true,
            ignoreTrailingComments: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
          },
        ],
        "newline-before-return": 2,
        "no-confusing-arrow": 0,
        "no-else-return": 1,
        "no-nested-ternary": ["error"],
        "no-return-assign": 0,
        "no-param-reassign": 0,
        "no-plusplus": 0,
        "no-shadow": 0,
        "no-underscore-dangle": 0,
        "no-use-before-define": [
          "error",
          { functions: false, classes: false, variables: false },
        ],
        "object-curly-newline": [2, { multiline: true, consistent: true }],
        "one-var": ["error", "never"],
        "operator-linebreak": 0,
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "*", next: "if" },
          { blankLine: "any", prev: "block-like", next: "if" },
        ],
        "prefer-arrow-callback": 0,
        "prefer-const": 0,
        "prefer-destructuring": 0,
        "prefer-object-spread": 0,
        "prefer-spread": 0,
        "space-before-function-paren": [
          "error",
          {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
          },
        ],
        "react/destructuring-assignment": 0,
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/forbid-prop-types": 0,
        "react/no-unused-prop-types": 2,
        "react/jsx-props-no-spreading": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/state-in-constructor": 0,
        "react/static-property-placement": 0,
        "react/display-name": 0,
        "react/jsx-wrap-multilines": 0,
      },
    },
    {
      files: ['*.js'],
      env: {
        es2021: true,
        commonjs: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
    },
    {
      files: ['*.ts'],
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint"
      ],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      rules: {
        "@typescript-eslint/no-unused-vars": ["error", { 
          "varsIgnorePattern": "^_",
          "argsIgnorePattern": "^_" 
        }],
      }
    },
  ],
};