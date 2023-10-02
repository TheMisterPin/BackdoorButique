module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended" 
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-refresh',
    'prettier'
  ],
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  settings: {
    react: {
      version: 'detect',
    },
    
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  rules: {
    'react/jsx-curly-spacing': ['error', { 'when': 'always' }],
    'react/jsx-wrap-multilines': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-unused-vars': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'arrow-body-style': ['warn', 'as-needed'],
    'no-else-return': 'warn',
    'no-unneeded-ternary': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': ['warn', { words: true, nonwords: false }],
    'spaced-comment': ['warn', 'always', { markers: ['/'] }],
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'eqeqeq': ['warn', 'always'],
    'no-array-constructor': 'warn',
    'no-loop-func': 'warn',
    'no-new-wrappers': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'indent': ['error', 2, { 'SwitchCase': 1 }], // 2-space indentation, indent 'case' clauses in 'switch' statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }, // enforce blank line before 'return' statements
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},  // enforce blank lines after declarations
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },  // enforce blank lines or no blank lines between declarations
    ]
  },
};
