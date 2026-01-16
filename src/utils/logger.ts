import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

export const logger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console(),

    new winston.transports.Http({
      host: 'localhost',
      port: 8080,
      path: '/',
      ssl: false,
      format: winston.format.json(),
    }),
  ],
});
