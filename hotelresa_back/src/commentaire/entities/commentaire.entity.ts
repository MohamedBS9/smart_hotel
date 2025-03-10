import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";
@Schema()
export class Commentaire {
    @Prop()
    note:number
    @Prop()
    msg:string
    @Prop()
    date:Date 
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'hotel'})
    hotel:Types.ObjectId
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'client'})
    client:Types.ObjectId
    
}

export const CommentaireSchema=SchemaFactory.createForClass(Commentaire)
