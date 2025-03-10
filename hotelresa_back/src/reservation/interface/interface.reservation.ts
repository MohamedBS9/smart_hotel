import { Types } from "mongoose"
import { Document } from "mongoose"

export interface IResevation extends Document{
    readonly dateDebut:Date
    readonly datefin:Date
    readonly statut:string
    chambre:Types.ObjectId[]
    client:Types.ObjectId
}