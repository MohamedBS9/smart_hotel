import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

@Schema()
export class hotel {
    @Prop()
    nom:string
    @Prop()
    adress:string
    @Prop()
    descripition:string
    @Prop()
    notation:number
    @Prop()
    gallery:string[]
    @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref :'chambre'}] })
    chambre:Types.ObjectId[]   
    @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref :'commentaire'}]})
    commentaire:Types.ObjectId[] 
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'hotelier'})
    hotelier:Types.ObjectId
    
}
export const hotelSchema=SchemaFactory.createForClass(hotel)
