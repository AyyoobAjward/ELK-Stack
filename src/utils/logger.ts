import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as net from 'net';

export const logger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console(),

    new winston.transports.Http({
      host: 'localhost',   // docker host
      port: 8080,
      path: '/',
      ssl: false,
      format: winston.format.json(),
    }),
  ],
});
