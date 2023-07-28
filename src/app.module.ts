import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { RevenueModule } from './revenue/revenue.module';
import { RevenueTypeModule } from './revenue-type/revenue-type.module';
import { RecipeStepsModule } from './recipe-steps/recipe-steps.module';
import { RatingModule } from './rating/rating.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { IngredientRevenueModule } from './ingredient-revenue/ingredient-revenue.module';

@Module({
  imports: [UserModule, RevenueModule, RevenueTypeModule, RecipeStepsModule, RatingModule, IngredientModule, IngredientRevenueModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
