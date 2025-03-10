import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Types } from "mongoose";

@Schema()
export class Reservation {
    @Prop()
    dateDebut:Date
    @Prop()
    datefin:Date
    @Prop()
    statut:string
    @Prop({type:[{type:mongoose.Schema.Types.ObjectId,ref :'chambre'}] })
    chambre:Types.ObjectId[]
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'utilisateur'})
    client:Types.ObjectId
}
export const ReservationSchema=SchemaFactory.createForClass(Reservation)
