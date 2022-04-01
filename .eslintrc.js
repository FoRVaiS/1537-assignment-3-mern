// @ts-check

const rules = {
  'strict': 0,

  'space-before-function-paren': 0,
  'no-extra-parens': 0,

  'indent': [1, 2],
  'curly': 0,
  'multiline-comment-style': 0,
  'no-restricted-syntax': 0,

  'max-classes-per-file': 0,
  'class-methods-use-this': 0,
  'new-cap': 0,
  'newline-per-chained-call': 0,
  'prefer-destructuring': ['error', {
    'VariableDeclarator': {
      'array': false,
      'object': true,
    },
  }],

  'linebreak-style': [1, 'unix'],
};

const jsRules = { ...rules };
const tsRules = {
  ...rules,
  '@typescript-eslint/no-non-null-assertion': 0,
};

module.exports = {
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ['*.d.ts', 'node_modules/', 'build/'],
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        '@forvais/eslint-config-base',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: tsRules,
    },
    {
      files: ['*.js'],
      extends: [
        '@forvais/eslint-config-base',
      ],
      rules: jsRules,
    },
  ],
};
