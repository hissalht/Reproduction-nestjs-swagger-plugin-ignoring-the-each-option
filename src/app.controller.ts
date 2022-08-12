import { Body, Controller, Post } from '@nestjs/common';
import { CreatePersonDto } from './create-person.dto';

@Controller()
export class AppController {
  @Post('/person')
  createPerson(@Body() body: CreatePersonDto) {
    return body;
  }
}
