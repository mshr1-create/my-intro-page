// src/server/index.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/App.tsx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 9000;

// 静的ファイルの提供
app.use(express.static(path.resolve(__dirname, '../build/public')));

app.get('*', (req, res) => {
  // サーバー側で React コンポーネントをレンダリング
  const appString = renderToString(<App />);

  // HTML テンプレートにレンダリング結果を埋め込む
  const html = `
    <!DOCTYPE html>
    <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <title>My SSR React App</title>
      </head>
      <body>
        <div id="root">${appString}</div>
        <script src="/bundle.js" type="module"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
