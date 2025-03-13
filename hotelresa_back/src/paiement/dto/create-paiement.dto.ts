import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaiementDto {
    @IsString()
    @IsNotEmpty()
    montant:number
    @IsString()
    @IsNotEmpty()
    date:Date
    @IsString()
    @IsNotEmpty()
    metode:string
    @IsString()
    @IsNotEmpty()
    statut:string

}
