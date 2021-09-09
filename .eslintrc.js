module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 1,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'eol-last': 1,
    'comma-dangle': 0,
    'jsx-a11y/no-autofocus': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    'react/jsx-uses-vars': ['error'],
    'react/jsx-uses-react': 1,
    'no-unused-vars': ['warn', { vars: 'local', args: 'none', ignoreRestSiblings: true }],
    'space-before-function-paren': 0,
    'no-template-curly-in-string': 0,
    camelcase: 0,
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
      },
    ],
  },
};
