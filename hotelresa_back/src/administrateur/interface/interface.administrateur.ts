import { Document } from "mongoose";
import { IUtilisateur } from "src/utilisateur/interface/interface.utilisateur";
export interface IAdministrateur extends IUtilisateur{
    role:string
}