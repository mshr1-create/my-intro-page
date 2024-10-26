// babel.config.js
export default {
  presets: [
    '@babel/preset-env', // 最新の JavaScript 構文をトランスパイル
    '@babel/preset-react', // JSX をトランスパイル
    '@babel/preset-typescript', // 追加
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs', // 追加
  ],
};
