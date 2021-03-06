import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/api/items')
  getItems() {
    return {name:"John", age:43}
  }
  @Post('items')
  addItem(){
    
  }
}
