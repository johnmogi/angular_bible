0. nest new server
https://github.com/piotr-jura-udemy/master-nest-js/tree/01-07-dto-update/src

0. items.controller.ts:
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { CreateItemDto } from './create-item.dto';
import { UpdateItemDto } from "./update-item.dto";
@Controller('/items')
export class ItemsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'First item' },
      { id: 2, name: 'Second item' }
    ];
  }
  @Get(':id')
  findOne(@Param('id') id) {
    return { id: 1, name: 'First item' }
  }
  @Post()
  create(@Body() input: CreateItemDto) {
    return input;
  }
  @Patch(':id')
  update(@Param('id') id, @Body() input: UpdateItemDto) {
    return input;
  }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) { }
}

0. import { PartialType } from "@nestjs/mapped-types";
import { CreateEventDto } from './create-event.dto';
export class UpdateEventDto extends PartialType(CreateEventDto) { }

0. CORS:
const app = await NestFactory.create(AppModule);
app.enableCors();
await app.listen(3000);

0. 