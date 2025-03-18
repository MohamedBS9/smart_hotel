import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { IHotel } from './interface/interface.hotel';
import { IHotelier } from 'src/hotelier/interface/interface.hotelier';
import { Document } from "mongoose"

@Injectable()
export class HotelService {
  constructor(@InjectModel('hotel') private hotelModel:Model<IHotel>,@InjectModel('utilisateur') private hotelierModel:Model<IHotelier>){}
  async createNewHotel(createHotelDto: CreateHotelDto):Promise<IHotel>{
    const NewHotel=await new this.hotelModel(createHotelDto)
    const savehotel = await NewHotel.save() as IHotel
    const hotelierId= await this.hotelierModel.findById(createHotelDto.hotelier)
    if (hotelierId) {
      hotelierId.hotel.push(savehotel._id as mongoose.Types.ObjectId)
          const savehotelier = await hotelierId.save()
          console.log(savehotelier)
    }
    return savehotel
  }
    



 
async listeHotel():Promise<IHotel[]>{
  const listeData =await this.hotelModel.find()
  if(!listeData){
    throw new  BadRequestException('datanot found ')
  }
  return listeData
}


// async deleteHotel(id:string):Promise<IHotel>{
//   const listeData =await this.hotelModel.findByIdAndDelete(id)
//   if(!listeData){
//     throw new  BadRequestException('data with this id does not found ')

//   }
//   return listeData
// }

async deleteHotel(id: string): Promise<IHotel> {
    const listeData = await this.hotelModel.findByIdAndDelete(id)
    if (!listeData) {
      throw new BadRequestException('data with this id does not found ')
    }
    const updateHotelier = await this.hotelierModel.findById(listeData.hotelier);
    if(updateHotelier){
      updateHotelier.hotel =  updateHotelier.hotel.filter(hotelId => hotelId.toString()!== id);
    await  updateHotelier.save();
    }else{
    throw new NotFoundException(`hotel #${id} not found in hotelier`);
  } 
    return listeData
  }



async updateHotel(id:string,updateHotelsDto:UpdateHotelDto ):Promise<IHotel>{
  const updateHotel= await this.hotelModel.findByIdAndUpdate(id,updateHotelsDto,{new:true})
  if (!updateHotel){
    throw new BadRequestException('hotel not found')
  }
  return updateHotel
 }

 async findHotel(id:string):Promise<IHotel>{
  const cours =await this.hotelModel.findById(id)
  if(!cours){
    throw new  BadRequestException('hotel not found ')

  }
  return cours
}
  
}
