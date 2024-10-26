// webpack.server.js
import path from 'path';
import { fileURLToPath } from 'url';
import webpackNodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/server/index.js', // エントリーポイント
  target: 'node14', // Node.js 環境向けのビルド
  mode: 'development',
  output: {
    filename: 'server.bundle.cjs', // 出力ファイル名
    path: path.resolve(__dirname, 'build'), // 出力ディレクトリ
    // libraryTarget: 'module', // ESモジュールとして出力
    // module: true,
    chunkFormat: 'module', // チャンク形式を 'module' に指定
  },
  // experiments: {
  //   outputModule: true, // モジュール出力を有効化
  // },
  externals: [webpackNodeExternals()], // node_modules をバンドルから除外
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 拡張子に .ts と .tsx を追加
        exclude: /node_modules/, // node_modules は除外
        use: {
          loader: 'babel-loader', // Babel ローダーを使用
        },
      },
      {
        test: /\.css$/, // .css ファイルを無視
        loader: 'ignore-loader', // サーバー側では CSS を無視
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 拡張子に .ts と .tsx を追加
  },
};
