// app.js
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! I am doing good');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});