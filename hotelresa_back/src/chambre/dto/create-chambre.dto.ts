import { IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateChambreDto {
        @IsString()
        @IsNotEmpty()
        type:string
        @IsString()
        @IsNotEmpty()
        prix:number
        @IsString()
        @IsNotEmpty()
        disponibilité: boolean
        @IsString()
        @IsNotEmpty()
        capacite:number
        @IsString()
        @IsNotEmpty()
        photo:string[]
        hotel:Types.ObjectId
        reservation:Types.ObjectId[]
}
