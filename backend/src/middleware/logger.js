import winston from 'winston';

const logger = winston.createLogger({
  level: 'verbose',
  transports: [
    new winston.transports.Console(),
  ],
});

export default logger;
