import { IsNotEmpty, IsString } from "class-validator"
import { Types } from "mongoose"

export class CreateHotelDto {
    @IsString()
    @IsNotEmpty()
    nom: string
    @IsString()
    @IsNotEmpty()
    adress: string
    @IsString()
    @IsNotEmpty()
    descripition: string
    @IsString()
    @IsNotEmpty()
    notation: number
    @IsString()
    @IsNotEmpty()
    gallery: string[]
    chambre:Types.ObjectId[]
    commentaire:Types.ObjectId[]
    hotelier:Types.ObjectId
    

    


}
