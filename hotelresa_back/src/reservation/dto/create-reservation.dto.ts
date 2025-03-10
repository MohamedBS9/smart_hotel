import { IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateReservationDto {
    @IsString()
    @IsNotEmpty()
    dateDebut:Date
    @IsString()
    @IsNotEmpty()
    datefin:Date
    @IsString()
    @IsNotEmpty()
    statut:string
    chambre:Types.ObjectId[]
    client:Types.ObjectId
    
}
