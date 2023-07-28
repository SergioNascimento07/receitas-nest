import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientRevenueService } from './ingredient-revenue.service';
import { CreateIngredientRevenueDto } from './dto/create-ingredient-revenue.dto';
import { UpdateIngredientRevenueDto } from './dto/update-ingredient-revenue.dto';

@Controller('ingredient-revenue')
export class IngredientRevenueController {
  constructor(private readonly ingredientRevenueService: IngredientRevenueService) {}

  @Post()
  create(@Body() createIngredientRevenueDto: CreateIngredientRevenueDto) {
    return this.ingredientRevenueService.create(createIngredientRevenueDto);
  }

  @Get()
  findAll() {
    return this.ingredientRevenueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientRevenueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredientRevenueDto: UpdateIngredientRevenueDto) {
    return this.ingredientRevenueService.update(+id, updateIngredientRevenueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientRevenueService.remove(+id);
  }
}
