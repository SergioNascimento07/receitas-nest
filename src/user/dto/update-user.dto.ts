import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {

    @IsOptional()
    name: string

    @IsOptional()
    email: string

    @IsOptional()
    date_of_birth: string

    @IsOptional()
    @MinLength(6)
    password: string
}
