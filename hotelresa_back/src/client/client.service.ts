import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IClient } from './interface/interface.client';
import * as  crypto from 'crypto'
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ClientService {
  constructor(@InjectModel('utilisateur') private ClientModel: Model<IClient>, private mailerServise: MailerService){}


  async generteCode(): Promise<string> {
    return crypto.randomBytes(3).toString('hex').toUpperCase();
  }


  async createClient(createClientDto: CreateClientDto): Promise<IClient>{
    const code = await this.generteCode()
    const mailOptions = {
      to: createClientDto.email,
      text:`votre code de verification est: ${code}`,
      html:`<p>Votre code de verification est :<strong><a href=http://localhost:3000/utilisateur/verify/${code}>code</a></strong></p>`
    };
    await this.mailerServise.sendMail(mailOptions);
    
    
    const newClient = await new this.ClientModel({...createClientDto, code: code })

    return newClient.save()
    
  }


   async listeClient(): Promise<IClient[]> {
      const listeData = await this.ClientModel.find({role:"client"})
      if (!listeData) {
        throw new BadRequestException('datanot found ')
  
      }
      return listeData
    }
  
    async deleteClient(id: string): Promise<IClient> {
      const listeData = await this.ClientModel.findByIdAndDelete(id)
      if (!listeData) {
        throw new BadRequestException('data with this id does not found ')
  
      }
      return listeData
    }
  
    async updateClient(id: string, updateClientDto: UpdateClientDto): Promise<IClient> {
      const updateClient = await this.ClientModel.findByIdAndUpdate(id, updateClientDto, { new: true })
      if (!updateClient) {
        throw new BadRequestException('Client not found')
      }
      return updateClient
    }
  
    async findClient(id: string): Promise<IClient> {
      const Client = await this.ClientModel.findById(id)
      if (!Client) {
        throw new BadRequestException('Client not found ')
  
      }
      return Client
    }
  

}
