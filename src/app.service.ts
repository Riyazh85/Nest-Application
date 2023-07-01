import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getList(): Array<string> {
    return ['Hello World!', 'Riyaz'];
  }
}
