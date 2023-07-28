import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    const newUser = await prismaClient.users.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        date_of_birth: createUserDto.date_of_birth,
        password: createUserDto.password
      }
    })
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
