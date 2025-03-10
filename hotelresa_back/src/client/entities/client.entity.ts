import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { Types } from "mongoose"

@Schema()
export class Client extends Utilisateur {
    role:string
    @Prop()
    image:string
    @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref :'reservation'}]})
    reservation:Types.ObjectId[]
}
export const ClientSchema = SchemaFactory.createForClass(Client)
