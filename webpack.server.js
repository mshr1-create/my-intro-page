// webpack.server.js
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './server/index.js', // エントリーポイント
  target: 'node', // Node.js 環境向けのビルド
  mode: 'development',
  output: {
    filename: 'server.bundle.mjs', // 出力ファイル名
    path: path.resolve(__dirname, 'build'), // 出力ディレクトリ
    libraryTarget: 'module', // ESモジュールとして出力
    module: true,
  },
  experiments: {
    outputModule: true, // モジュール出力を有効化
  },
  module: {
    rules: [
      {
        test: /\.js$/, // .js ファイルに対して
        exclude: /node_modules/, // node_modules は除外
        use: {
          loader: 'babel-loader', // Babel ローダーを使用
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 解決する拡張子
  },
};
