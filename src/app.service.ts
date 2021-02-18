import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hey, am learning and working, I made new project and with the help of @Get decorator i got this response.';
  }
}
