import { Injectable } from '@nestjs/common';
import { CreateIngredientRevenueDto } from './dto/create-ingredient-revenue.dto';
import { UpdateIngredientRevenueDto } from './dto/update-ingredient-revenue.dto';

@Injectable()
export class IngredientRevenueService {
  create(createIngredientRevenueDto: CreateIngredientRevenueDto) {
    return 'This action adds a new ingredientRevenue';
  }

  findAll() {
    return `This action returns all ingredientRevenue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredientRevenue`;
  }

  update(id: number, updateIngredientRevenueDto: UpdateIngredientRevenueDto) {
    return `This action updates a #${id} ingredientRevenue`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredientRevenue`;
  }
}
