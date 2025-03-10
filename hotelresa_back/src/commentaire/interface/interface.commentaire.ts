import { Types } from "mongoose"
import { Document } from "mongoose"

export interface ICommentaire extends Document{
    note:number
    msg:string
    date:Date
    hotel:Types.ObjectId
    client:Types.ObjectId
}