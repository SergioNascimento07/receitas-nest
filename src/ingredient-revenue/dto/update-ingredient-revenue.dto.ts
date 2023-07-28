import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientRevenueDto } from './create-ingredient-revenue.dto';

export class UpdateIngredientRevenueDto extends PartialType(CreateIngredientRevenueDto) {}
