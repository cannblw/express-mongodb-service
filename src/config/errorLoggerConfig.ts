import winston from 'winston';
import expressWinston from 'express-winston';

const errorLoggerConfig = expressWinston.errorLogger({
  transports: [new winston.transports.Console()],
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
});

export default errorLoggerConfig;
