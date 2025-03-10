import { IsNotEmpty, IsString } from "class-validator";

export class CreateFactureDto {
    @IsString()
    @IsNotEmpty()
    ttc:number
    @IsString()
    @IsNotEmpty()
    dateemission:Date
}
