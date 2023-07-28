import { Test, TestingModule } from '@nestjs/testing';
import { RevenueTypeController } from './revenue-type.controller';
import { RevenueTypeService } from './revenue-type.service';

describe('RevenueTypeController', () => {
  let controller: RevenueTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RevenueTypeController],
      providers: [RevenueTypeService],
    }).compile();

    controller = module.get<RevenueTypeController>(RevenueTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
