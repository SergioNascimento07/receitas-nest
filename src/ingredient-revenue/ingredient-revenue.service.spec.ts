import { Test, TestingModule } from '@nestjs/testing';
import { IngredientRevenueService } from './ingredient-revenue.service';

describe('IngredientRevenueService', () => {
  let service: IngredientRevenueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientRevenueService],
    }).compile();

    service = module.get<IngredientRevenueService>(IngredientRevenueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
