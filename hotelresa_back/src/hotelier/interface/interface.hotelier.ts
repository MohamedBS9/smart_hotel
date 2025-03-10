import { Document, Types } from "mongoose";
import { IUtilisateur } from "src/utilisateur/interface/interface.utilisateur";
export interface IHotelier extends IUtilisateur{
    role:string
    hotel:Types.ObjectId[]
}