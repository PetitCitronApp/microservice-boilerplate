module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  ignorePatterns: ["dist", "node_modules"],
  settings: {
    "import/resolver": {
      node: {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    ecmaFeatures: { experimentalObjectRestSpread: true, jsx: false },
    importOrderParserPlugins: ["typescript", "decorators-legacy"]
  },
  extends: [ "eslint:recommended", "airbnb-base", "prettier" ],
  rules: {
    complexity: ["error", 25],
    "no-unused-vars": ["error", {
      varsIgnorePattern: "^_",
      argsIgnorePattern: "^_",
    }],
    "import/extensions": ["error", "never"],
  },
  overrides: [
    // package.json configurations
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
      extends: ["plugin:jsonc/recommended-with-json"],
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      extends: ["plugin:jsonc/recommended-with-json"],
      rules: {
        'jsonc/sort-keys': [
          'error',
          { pathPattern: '^$', order: [ 'name', 'type', 'version', 'private', 'packageManager', 'description', 'keywords', 'license', 'author', 'repository', 'funding', 'main', 'module', 'types', 'unpkg', 'jsdelivr', 'exports', 'files', 'bin', 'sideEffects', 'scripts', 'peerDependencies', 'peerDependenciesMeta', 'dependencies', 'optionalDependencies', 'devDependencies', 'husky', 'lint-staged', 'eslintConfig' ] },
          { pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$', order: { type: 'asc' } },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
    },
    {
      files: ['*.spec.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      }
    }
  ]
};