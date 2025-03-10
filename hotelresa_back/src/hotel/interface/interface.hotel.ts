import { DSAEncoding } from "crypto"
import { Types } from "mongoose"
import { Document } from "mongoose"

export interface IHotel extends Document{
    readonly nom:string
    readonly  adress:string
    readonly  descripition:string
    readonly notation:number
    readonly gallery:string[]
    chambre:Types.ObjectId[]
    commentaire:Types.ObjectId[]
    hotelier:Types.ObjectId
    
    
    
}