import { Document, Types } from "mongoose";
export interface IUtilisateur extends Document{
    readonly nom:string
    readonly email:string
     motdepasse:string
    readonly phone:number
    refreshToken:string|undefined
    code:string|null
    verify:boolean
    
    
    
}