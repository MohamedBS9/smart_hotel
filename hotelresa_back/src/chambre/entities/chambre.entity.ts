import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
@Schema()
export class Chambre {
    @Prop()
    type:string
    @Prop()
    prix:number
    @Prop()
    disponibilité: boolean
    @Prop()
    capacite:number
    @Prop()
    photo:string[] 
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'hotel'})
    hotel:Types.ObjectId
    @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref :'reservation'}]})
    reservation:Types.ObjectId[]
}
export const chambreSchema=SchemaFactory.createForClass(Chambre)
