import express from 'express';
import dotenv from 'dotenv';

import serverless from 'serverless-http';

import loggerConfig from './config/loggerConfig';
import errorLoggerConfig from './config/errorLoggerConfig';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(loggerConfig);

app.post('/', (req, res) => res.send('Express server working'));

app.use(errorLoggerConfig);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at localhost:${PORT}`);
});

export default serverless(app);
