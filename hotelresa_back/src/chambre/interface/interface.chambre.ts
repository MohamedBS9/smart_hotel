import { Types } from "mongoose"
import { Document } from "mongoose"

export interface IChambre extends Document{
    type:string
    prix:number
    disponibilité: boolean
    capacite:number
    photo:string[]
    hotel:Types.ObjectId
    reservation:Types.ObjectId[]
}
