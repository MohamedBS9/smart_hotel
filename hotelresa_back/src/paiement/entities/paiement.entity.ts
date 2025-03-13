import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()
export class Paiement {
@Prop()
montant:number
@Prop()
date:Date
@Prop()
metode:string
@Prop()
statut:string
}
export const PaiementSchema = SchemaFactory.createForClass(Paiement)
