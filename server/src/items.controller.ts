import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { CreateItemDto } from './create-item.dto';
// import { UpdateItemDto } from "./update-item.dto";
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
//   @Patch(':id')
//   update(@Param('id') id, @Body() input: UpdateItemDto) {
//     return input;
//   }
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) { }
}