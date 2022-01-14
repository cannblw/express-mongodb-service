import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.get('/', (req, res) => res.send('Express server working'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at localhost:${PORT}`);
});
