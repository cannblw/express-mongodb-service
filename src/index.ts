import express from 'express';
import dotenv from 'dotenv';

import serverless from 'serverless-http';

import loggerConfig from './config/loggerConfig';
import errorLoggerConfig from './config/errorLoggerConfig';

import router from './router';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(loggerConfig);

app.use(router);

app.use(errorLoggerConfig);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at localhost:${PORT}`);
});

export default serverless(app);
