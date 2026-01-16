import { Injectable } from '@nestjs/common';
import { logger } from './utils/logger';

@Injectable()
export class AppService {

  getHello(): string {
    logger.log('GET: Hello', { service: 'AppService' });
    return 'get Hello';
  }

  setHello(): string {
    logger.log('GET: Hello', { service: 'AppService' });
    return 'post Hello'
  }
}
