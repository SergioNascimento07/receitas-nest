import { Test, TestingModule } from '@nestjs/testing';
import { RevenueTypeService } from './revenue-type.service';

describe('RevenueTypeService', () => {
  let service: RevenueTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevenueTypeService],
    }).compile();

    service = module.get<RevenueTypeService>(RevenueTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
