import { IsNotEmpty } from "class-validator";

export class LogoutUserDTO {
    
    @IsNotEmpty()
    token: string
}