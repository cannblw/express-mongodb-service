import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('Express server working'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at localhost:${PORT}`);
});
