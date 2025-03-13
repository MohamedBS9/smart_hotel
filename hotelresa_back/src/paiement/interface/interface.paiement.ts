export interface IPaiement extends Document{
    montant:number
    date:Date
    metode:string
    statut:string
}