import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, Matches, MinLength } from 'class-validator';

export class UpdateUserDto {

    @IsOptional()
    name: string

    @IsOptional()
    @IsEmail(undefined, {message: "O email informado é inválido"})
    email: string

    @IsOptional()
    @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2}/)
    date_of_birth: string

    @IsOptional()
    @MinLength(6)
    password: string
}
