import { Injectable } from '@nestjs/common';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IPaiement } from './interface/interface.paiement';
import { Model } from 'mongoose';

@Injectable()
export class PaiementService {
  constructor(@InjectModel('chambre') private paiementModel:Model<IPaiement>,) { }
    async createNewPaiement(createPaiementDto: CreatePaiementDto): Promise<IPaiement> {
      const newPaiement = await new this.paiementModel(createPaiementDto)
      
      return newPaiement.save()
    }

  findAll() {
    return `This action returns all paiement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paiement`;
  }

  update(id: number, updatePaiementDto: UpdatePaiementDto) {
    return `This action updates a #${id} paiement`;
  }

  remove(id: number) {
    return `This action removes a #${id} paiement`;
  }
}
createPaiementDto: CreatePaiementDto