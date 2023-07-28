import { Test, TestingModule } from '@nestjs/testing';
import { IngredientRevenueController } from './ingredient-revenue.controller';
import { IngredientRevenueService } from './ingredient-revenue.service';

describe('IngredientRevenueController', () => {
  let controller: IngredientRevenueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientRevenueController],
      providers: [IngredientRevenueService],
    }).compile();

    controller = module.get<IngredientRevenueController>(IngredientRevenueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
