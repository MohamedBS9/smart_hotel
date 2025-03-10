import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Facture {
    @Prop()
    ttc:number
    @Prop()
    dateemission:Date
}
export const FactureSchema=SchemaFactory.createForClass(Facture)

