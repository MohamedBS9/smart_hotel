import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHotelierDto } from './dto/create-hotelier.dto';
import { UpdateHotelierDto } from './dto/update-hotelier.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IHotelier } from './interface/interface.hotelier';
import { Model } from 'mongoose';
import * as  crypto from 'crypto'
import { MailerService } from '@nestjs-modules/mailer';
import { IHotel } from 'src/hotel/interface/interface.hotel';

@Injectable()
export class HotelierService {
  async generteCode(): Promise<string>{
  return crypto.randomBytes(3).toString('hex').toUpperCase();
  }
  
  constructor(@InjectModel('utilisateur') private HotelierModel: Model<IHotelier>, private mailerServise: MailerService,) { }
  
  async createHotelier(createHotelierDto: CreateHotelierDto): Promise<IHotelier> {
    const code = await this.generteCode()
    const mailOptions = {
      to: createHotelierDto.email,
      text: `votre code de verification est: ${code}`,
      html: `<p>Votre code de verification est :<strong><a href=http://localhost:3000/utilisateur/verify/${code}>code</a></strong></p>`
    };
    await this.mailerServise.sendMail(mailOptions);
   
    const newHotelier = await new this.HotelierModel({ ...createHotelierDto, code: code })
     return newHotelier.save()
    
  }

  async listeHotelier(): Promise<IHotelier[]> {
        const listeData = await this.HotelierModel.find({role:"hotelier"})
        if (!listeData) {
          throw new BadRequestException('datanot found ')
    
        }
        return listeData
      }
    
      async deleteHotelier(id: string): Promise<IHotelier> {
        const listeData = await this.HotelierModel.findByIdAndDelete(id)
        if (!listeData) {
          throw new BadRequestException('data with this id does not found ')
    
        }
        return listeData
      }
    
      async updateHotelier(id: string,updateHotelierDto:UpdateHotelierDto): Promise<IHotelier> {
        const updateHotelier = await this.HotelierModel.findByIdAndUpdate(id, updateHotelierDto, { new: true })
        if (!updateHotelier) {
          throw new BadRequestException('Hotelier not found')
        }
        return updateHotelier
      }
    
      async findHotelier(id: string): Promise<IHotelier> {
        const Hotelier = await this.HotelierModel.findById(id)
        if (!Hotelier) {
          throw new BadRequestException('Hotelier not found ')
    
        }
        return Hotelier
      }


}
