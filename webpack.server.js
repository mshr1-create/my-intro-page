// webpack.server.js
import path from 'path';
import { fileURLToPath } from 'url';
import webpackNodeExternals from 'webpack-node-externals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/server/index.js', // エントリーポイント
  target: 'node', // Node.js 環境向けのビルド
  mode: 'production',
  devtool: false, // ソースマップを無効化
  externals: [webpackNodeExternals()], // node_modules をバンドルから除外
  output: {
    filename: 'server.bundle.js', // 出力ファイル名
    path: path.resolve(__dirname, 'build'), // 出力ディレクトリ
    // library: {
    //   type: 'module',
    // },
    // chunkFormat: 'module', // チャンク形式を 'module' に指定
  },
  // experiments: {
  //   outputModule: true, // ES Modules 出力を有効化
  // },
  optimization: {
    minimize: false, // コードの難読化を防ぐ
    concatenateModules: true, // モジュールの結合を有効化
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/, // 拡張子に .ts と .tsx を追加
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
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 拡張子に .ts と .tsx を追加
  },
};
