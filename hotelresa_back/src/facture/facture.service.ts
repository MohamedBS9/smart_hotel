import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFacture } from './interface/interface.facture';

@Injectable()
export class FactureService {
  constructor(@InjectModel('facture') private factureModel:Model<IFacture>){}
   async createNewFacture(createFactureDto: CreateFactureDto): Promise<IFacture> {
        const newFacture = await new this.factureModel(createFactureDto)
        return newFacture .save()
      }

       async listeFacture(): Promise<IFacture[]> {
            const listeData = await this.factureModel.find()
            if (!listeData) {
              throw new BadRequestException('datanot found ')
        
            }
            return listeData
          }


           async deleteFacture(id: string): Promise<IFacture> {
                const listeData = await this.factureModel.findByIdAndDelete(id)
                if (!listeData) {
                  throw new BadRequestException('data with this id does not found ')
            
                }
                return listeData
              }

              async updateFacture(id: string, updateFactureDto: UpdateFactureDto): Promise<IFacture> {
                    const updateFacture = await this.factureModel.findByIdAndUpdate(id,updateFactureDto, { new: true })
                    if (!updateFacture) {
                      throw new BadRequestException('Facture not found')
                    }
                    return updateFacture
                  }

                  async findFacture(id: string): Promise<IFacture> {
                        const facture = await this.factureModel.findById(id)
                        if (!facture) {
                          throw new BadRequestException('facture not found ')
                    
                        }
                        return facture
                      }
 
}

