import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RevenueTypeService } from './revenue-type.service';
import { CreateRevenueTypeDto } from './dto/create-revenue-type.dto';
import { UpdateRevenueTypeDto } from './dto/update-revenue-type.dto';

@Controller('revenue-type')
export class RevenueTypeController {
  constructor(private readonly revenueTypeService: RevenueTypeService) {}

  @Post()
  create(@Body() createRevenueTypeDto: CreateRevenueTypeDto) {
    return this.revenueTypeService.create(createRevenueTypeDto);
  }

  @Get()
  findAll() {
    return this.revenueTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revenueTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevenueTypeDto: UpdateRevenueTypeDto) {
    return this.revenueTypeService.update(+id, updateRevenueTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revenueTypeService.remove(+id);
  }
}
