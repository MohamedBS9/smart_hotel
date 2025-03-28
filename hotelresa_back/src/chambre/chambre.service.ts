import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateChambreDto } from './dto/create-chambre.dto';
import { UpdateChambreDto } from './dto/update-chambre.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IChambre } from './interface/interface.chambre';
import mongoose, { Model } from 'mongoose';
import { IHotel } from 'src/hotel/interface/interface.hotel';



@Injectable()
export class ChambreService {
  constructor(@InjectModel('chambre') private chambreModel:Model<IChambre>,@InjectModel('hotel') private hotelModel:Model<IHotel>,@InjectModel('reservation') private reservationModel:Model<IHotel>) { }
  async createNewChambre(createChambreDto: CreateChambreDto): Promise<IChambre> {
    const newChambre = await new this.chambreModel(createChambreDto)
    const savechambre= await newChambre.save() as IChambre
    const hotelId= await this.hotelModel.findById(createChambreDto.hotel)
    const reservationId= await this.reservationModel.findById(createChambreDto.hotel)
    if (hotelId) {
      hotelId.chambre.push(savechambre._id as mongoose.Types.ObjectId)
          const savehotel = await hotelId.save()
          console.log(savehotel)
    }
    if (reservationId) {
      reservationId.commentaire.push(savechambre._id as mongoose.Types.ObjectId)
             const saveutilisateeur = await reservationId.save()
             console.log(saveutilisateeur) 
            }
    return savechambre
  }

  async listeChambre(): Promise<IChambre[]> {
    const listeData = await this.chambreModel.find()
    if (!listeData) {
      throw new BadRequestException('datanot found ')

    }
    return listeData
  }

  async deleteChambre(id: string): Promise<IChambre> {
    const listeData = await this.chambreModel.findByIdAndDelete(id)
    if (!listeData) {
      throw new BadRequestException('data with this id does not found ')
    }
    const updateHotel = await this.hotelModel.findById(listeData.hotel);
    if(updateHotel){
      updateHotel.chambre =  updateHotel.chambre.filter(chamId => chamId.toString()!== id);
    await  updateHotel.save();
    }else{
    throw new NotFoundException(`chambre #${id} not found in hotel`);
 }
    return listeData
  }


  

  async updateChambre(id: string, updateChambreDto: UpdateChambreDto): Promise<IChambre> {
    const updateChambre = await this.chambreModel.findByIdAndUpdate(id, updateChambreDto, { new: true })
    if (!updateChambre) {
      throw new BadRequestException('chambre not found')
    }
    return updateChambre
  }

  async findChambre(id: string): Promise<IChambre> {
    const chambre = await this.chambreModel.findById(id)
    if (!chambre) {
      throw new BadRequestException('chambre not found ')

    }
    return chambre
  }

}








