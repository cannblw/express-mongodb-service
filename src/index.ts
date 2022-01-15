import express from 'express';
import dotenv from 'dotenv';

import serverless from 'serverless-http';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.post('/', (req, res) => res.send('Express server working'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at localhost:${PORT}`);
});

export default serverless(app);
