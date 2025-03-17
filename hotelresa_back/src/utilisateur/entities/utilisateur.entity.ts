import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import * as  argon2 from 'argon2'
import mongoose, { Types } from "mongoose"


@Schema({discriminatorKey:'role'})
export class Utilisateur {
    @Prop()
    nom: string
    @Prop({unique:true})
    email: string
    @Prop()
    motdepasse: string
    @Prop()
    phone: number
    @Prop({type:String})
    refreshToken:string | undefined
    @Prop({type:String})
    code:string|null
    @Prop()
    verify:boolean 
    @Prop()
    resetCode:string
    @Prop()
    resetCodeExpires:Date


    
    

}

export const UtilisateurSchema = SchemaFactory.createForClass(Utilisateur).pre('save',async function(){
 this.motdepasse=await argon2.hash(this.motdepasse)
})
