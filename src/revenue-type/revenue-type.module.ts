import { Module } from '@nestjs/common';
import { RevenueTypeService } from './revenue-type.service';
import { RevenueTypeController } from './revenue-type.controller';

@Module({
  controllers: [RevenueTypeController],
  providers: [RevenueTypeService]
})
export class RevenueTypeModule {}
