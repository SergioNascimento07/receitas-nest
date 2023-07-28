import { Injectable } from '@nestjs/common';
import { CreateRevenueTypeDto } from './dto/create-revenue-type.dto';
import { UpdateRevenueTypeDto } from './dto/update-revenue-type.dto';

@Injectable()
export class RevenueTypeService {
  create(createRevenueTypeDto: CreateRevenueTypeDto) {
    return 'This action adds a new revenueType';
  }

  findAll() {
    return `This action returns all revenueType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} revenueType`;
  }

  update(id: number, updateRevenueTypeDto: UpdateRevenueTypeDto) {
    return `This action updates a #${id} revenueType`;
  }

  remove(id: number) {
    return `This action removes a #${id} revenueType`;
  }
}
