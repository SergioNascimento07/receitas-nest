import { IsEmail, IsNotEmpty, Matches, MinLength, Validate } from "class-validator"
import { CustomMatchPasswords } from "../validacao/password-is-equal"

export class CreateUserDto {

    @IsNotEmpty({message: "O campo de nome não pode estar vazio"})
    name: string
    
    @IsEmail(undefined, {message: "O email informado é inválido"})
    @IsNotEmpty({message: "O campo de email não pode estar vazio"})
    email: string
    
    @IsNotEmpty({message: "O campo de data de nascimento não pode estar vazio"})
    date_of_birth: string
    
    @IsNotEmpty({message: "O campo de senha não pode estar vazio"})
    @MinLength(6)
    password: string
    
    @IsNotEmpty({message: "O campo de confirmação de senha não pode estar vazio"})
    @MinLength(6)
    @Validate(CustomMatchPasswords, ['password'])
    passwordConfirm: string
}
