import { IsNotEmpty, isNotEmpty, IsString, isString } from "class-validator";
import { Types } from "mongoose";
import { CreateUtilisateurDto } from "src/utilisateur/dto/create-utilisateur.dto";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
export class CreateClientDto extends CreateUtilisateurDto{
    
    role:string
    @IsString()
    @IsNotEmpty()
    image:string
    reservation:Types.ObjectId[]
}
