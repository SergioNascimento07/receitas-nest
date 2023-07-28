import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { CreateUserDto } from "../dto/create-user.dto";

@ValidatorConstraint({ name: 'CustomMatchPasswords', async: false })
export class CustomMatchPasswords implements ValidatorConstraintInterface {
    validate(password: string, args: ValidationArguments) {
    //no args automaticament é passado o objetop e seus valores
    if (password !== (args.object as CreateUserDto).password) {
        // (args.object)[args.constraints[0]] == (args.object as CreateUserDto).password
        //args.contraints são os nomes dos argumentos da própria função
        return false
    };
    return true;
   }

    defaultMessage(args: ValidationArguments) {
        return "A senha confirmada precisa ser igual a senha informada!";
   }
}