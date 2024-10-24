// server.bundle.mjs
import express from 'express';

const app = express();
const port = 9000;

app.get('/', function (req, res) {
  res.send('Hello world');
});

app.listen(port, function () {
  console.log('Server running at http://localhost:${port}/');
});
