import { IsNotEmpty,IsNumber,IsString } from "class-validator";
import { Types } from "mongoose";
export class CreateUtilisateurDto {
    @IsString()
    @IsNotEmpty()
    name:string
    @IsString()
    @IsNotEmpty()
    email:string
    @IsString()
    @IsNotEmpty()
    motdepasse:string
    @IsNumber()
    @IsNotEmpty()
    phone:number
    @IsNumber()
    @IsNotEmpty()
    refreshToken:string|undefined
    code:string|null
    verify:boolean 
    
    
}
