import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdministrateurDto } from './dto/create-administrateur.dto';
import { UpdateAdministrateurDto } from './dto/update-administrateur.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAdministrateur } from './interface/interface.administrateur';

@Injectable()
export class AdministrateurService {
  constructor(@InjectModel('utilisateur') private AdminModel: Model<IAdministrateur>) { }


  async createNewAdministrateur(createAdministrateurDto: CreateAdministrateurDto): Promise<IAdministrateur> {
    
    const existingAdmin =await this.AdminModel.findOne({role:"adminstrateur"})
    if (!existingAdmin) {
    const newAdmin = await new this.AdminModel(createAdministrateurDto)
    return newAdmin.save() 
    }
    console.log("admin deja exite")
    throw new BadRequestException('you can not add another admin') 
  }

  async updateAdministrateur(id: string, updateAdministrateurDto: UpdateAdministrateurDto): Promise<IAdministrateur> {
    const updateAdministrateur = await this.AdminModel.findByIdAndUpdate(id, updateAdministrateurDto, { new: true })
    if (!updateAdministrateur) {
      throw new BadRequestException('Administrateur not found')
    }
    return updateAdministrateur
  }



  async findAdministrateur(id: string): Promise<IAdministrateur> {
    const admin = await this.AdminModel.findById(id)
    if (!admin) {
      throw new BadRequestException('Administrateur')

    }
    return admin
  }

}
