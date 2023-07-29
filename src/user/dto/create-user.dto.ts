import { IsEmail, IsNotEmpty, Matches, MinLength, Validate } from "class-validator"
import { CustomMatchPasswords } from "../validacao/password-is-equal"

export class CreateUserDto {

    @IsNotEmpty({message: "O campo de nome não pode estar vazio"})
    name: string
    
    @IsEmail(undefined, {message: "O email informado é inválido"})
    @IsNotEmpty({message: "O campo de email não pode estar vazio"})
    email: string
    
    @IsNotEmpty({message: "O campo de data de nascimento não pode estar vazio"})
    @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2}/, {message: "Insira uma data no formato correto, ex: 2013-02-14T00:00:00-00:00"})
    date_of_birth: string
    
    @IsNotEmpty({message: "O campo de senha não pode estar vazio"})
    @MinLength(6, {message: "O campo de senha precisa ter pelo menos 6 caracteres"})
    password: string
    
    @IsNotEmpty({message: "O campo de confirmação de senha não pode estar vazio"})
    @MinLength(6, {message: "O campo de confirmação de senha precisa ter pelo menos 6 caracteres"})
    @Validate(CustomMatchPasswords, ['password'], {message: "O campo de confirmação de senha precisa ser igual ao de senha"})
    passwordConfirm: string
}
