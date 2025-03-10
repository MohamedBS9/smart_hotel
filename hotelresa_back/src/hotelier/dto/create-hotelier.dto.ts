import { IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
export class CreateHotelierDto extends Utilisateur {
    role:string
    @IsString()
    @IsNotEmpty()
    image:string
    hotel:Types.ObjectId[]
}
