import { PartialType } from '@nestjs/mapped-types';
import { CreateRevenueTypeDto } from './create-revenue-type.dto';

export class UpdateRevenueTypeDto extends PartialType(CreateRevenueTypeDto) {}
