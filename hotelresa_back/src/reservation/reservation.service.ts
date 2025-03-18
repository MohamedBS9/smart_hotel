import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { IResevation } from './interface/interface.reservation';
import { IChambre } from 'src/chambre/interface/interface.chambre';
import { IUtilisateur } from 'src/utilisateur/interface/interface.utilisateur';
import { Document } from 'mongoose';
import { IClient } from 'src/client/interface/interface.client';

@Injectable()
export class ReservationService {
  constructor(@InjectModel('reservation') private reservationModel:Model<IResevation>,@InjectModel('chambre') private chambreModel:Model<IChambre>,
  @InjectModel('utilisateur') private clientModel:Model<IClient>) { }
    async createNewReservation(createReservationDto: CreateReservationDto): Promise<IResevation> {
      const newReservation = await new this.reservationModel(createReservationDto)
      const saveReservation= await  newReservation.save() as IResevation
      const chambreId= await this.chambreModel.findById(createReservationDto.chambre)
      const clientId = await this.clientModel.findById(createReservationDto.client)
      
      if (chambreId) {
        chambreId.reservation.push(saveReservation._id as mongoose.Types.ObjectId)
                  const savechambre = await chambreId.save()
                  console.log(savechambre)
            }
      if (clientId) {
               clientId.reservation.push(saveReservation._id as mongoose.Types.ObjectId)
               const saveclient = await clientId.save()
               console.log(saveclient) 
              }      
            return saveReservation
      }
     
    
  
    async listeResevation(): Promise<IResevation[]> {
      const listeData = await this.reservationModel.find()
      if (!listeData) {
        throw new BadRequestException('datanot found ')
  
      }
      return listeData
    }
  
    async deleteReservation(id: string): Promise<IResevation> {
      const listeData = await this.reservationModel.findByIdAndDelete(id)
      if (!listeData) {
        throw new BadRequestException('data with this id does not found ')
      }

      const updateClient = await this.clientModel.findById(listeData.client);
      if(updateClient){
      updateClient.reservation =  updateClient.reservation.filter(reservationId => reservationId.toString()!== id);
      await  updateClient.save();
      }else{
      throw new NotFoundException(`reservation #${id} not found in hotel`);
      }


      const updateChambre = await this.clientModel.findById(listeData.client);
      if(updateChambre){
      updateChambre.reservation =  updateChambre.reservation.filter(reservationId => reservationId.toString()!== id);
      await  updateChambre.save();
      }else{
      throw new NotFoundException(`reservation #${id} not found in hotel`);
      }
      
      return listeData
      }
      
    
  
  
     async updateReservation(id: string, updateReservationDto: UpdateReservationDto): Promise<IResevation> {
      const updateReservation = await this.reservationModel.findByIdAndUpdate(id,updateReservationDto, { new: true })
      if (!updateReservation) {
        throw new BadRequestException('reservation not found')
      }
      return updateReservation
    }
  
     async findReservation(id: string): Promise<IResevation> {
      const reservation = await this.reservationModel.findById(id)
      if (!reservation) {
        throw new BadRequestException('reservation not found ')
  
      }
      return reservation
    }
  
}
