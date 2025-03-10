import { IsNotEmpty, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateCommentaireDto {
    @IsString()
    @IsNotEmpty()
    note:number
    @IsString()
    @IsNotEmpty()
    msg:string
    @IsString()
    @IsNotEmpty()
    date:Date 
    hotel:Types.ObjectId
    client:Types.ObjectId
    
}
