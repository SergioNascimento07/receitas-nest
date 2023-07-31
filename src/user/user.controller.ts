import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthenticateUserMiddleware } from '../middlewares/authenticateUserMiddleware';
import { LoginUserDTO } from './dto/login-user.dto';
import {Response} from 'express'
import jsonwebtoken from 'jsonwebtoken';
import { AuthenticateAdmMiddleware } from 'src/middlewares/authenticateAdmMiddleware';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const response = await this.userService.create(createUserDto);
    return response
  }

  @UseGuards(AuthenticateUserMiddleware)
  @Get()
  async findAll() {
    const response = await this.userService.findAll();
    return response
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.userService.findOne(email);
  }

  @UseGuards(AuthenticateUserMiddleware)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @UseGuards(AuthenticateUserMiddleware)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDTO, @Res({ passthrough: true }) res: Response) {
    const response = await this.userService.login(loginUserDto.email, loginUserDto.password)
    if(response.token) {
      console.log("Há cookies com token")
      
      res.cookie('access_token', response.token, {
        httpOnly: true,
        // secure: false,
        // sameSite: 'lax',
        expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
    }).send(response);
    }
    return response
  }
}
