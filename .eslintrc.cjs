module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error', // `any` 型の使用を禁止
      'react/react-in-jsx-scope': 'off', // React 17以降では不要
      'react/jsx-no-target-blank': ['error', { allowReferrer: false }], // セキュリティリスク防止
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignorePatterns: ['dist'],
  };
  