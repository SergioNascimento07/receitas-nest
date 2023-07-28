import { Module } from '@nestjs/common';
import { IngredientRevenueService } from './ingredient-revenue.service';
import { IngredientRevenueController } from './ingredient-revenue.controller';

@Module({
  controllers: [IngredientRevenueController],
  providers: [IngredientRevenueService]
})
export class IngredientRevenueModule {}
