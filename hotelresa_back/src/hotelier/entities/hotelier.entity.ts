
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Types } from "mongoose"
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity"
@Schema()
export class Hotelier extends Utilisateur {
    role:string
    @Prop()
    image:string
    @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref :'hotel'}]})
    hotel:Types.ObjectId[]
}
export const hotelierSchema = SchemaFactory.createForClass(Hotelier)