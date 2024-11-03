// webpack.client.js
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/client/index.js', // クライアント側のエントリーポイント
  output: {
    filename: 'bundle.js', // 出力されるファイル名
    path: path.resolve(__dirname, 'build/public'), // 出力先ディレクトリ
    publicPath: '/',
  },
  optimization: {
    minimize: false, // コードの難読化を防ぐ
    concatenateModules: true, // モジュールの結合を有効化
  },
  mode: 'development', // 開発モード
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/, // 拡張子に .ts と .tsx を追加
        exclude: /node_modules/, // node_modules は除外
        use: {
          loader: 'babel-loader', // Babel ローダーでトランスパイル
        },
      },
      {
        test: /\.css$/, // .css ファイルを対象
        use: ['style-loader', 'css-loader'], // CSS をバンドルするローダー
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // 拡張子に .ts と .tsx を追加
  },
};
