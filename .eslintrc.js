export default {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Prettier の推奨設定を追加
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier', // Prettier プラグインを追加
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
    'prettier/prettier': 'error', // Prettier のフォーマットエラーを ESLint エラーとして扱う
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist'],
};
