import { Injectable } from '@nestjs/common';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IPaiement } from './interface/interface.paiement';
import { Model } from 'mongoose';

@Injectable()
export class PaiementService {
  constructor(@InjectModel('paiement') private paiementModel:Model<IPaiement>,) { }
    async createNewPaiement(createPaiementDto: CreatePaiementDto): Promise<IPaiement> {
      const newPaiement = await new this.paiementModel(createPaiementDto)
      
      return newPaiement.save()
    }
 
  
}
