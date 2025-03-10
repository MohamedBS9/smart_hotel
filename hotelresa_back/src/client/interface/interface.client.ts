import { Document, Types } from "mongoose";
import { IUtilisateur } from "src/utilisateur/interface/interface.utilisateur";
export interface IClient extends IUtilisateur{
    role:string
    image:string
    reservation:Types.ObjectId[]
    commentaire:Types.ObjectId[] 
}