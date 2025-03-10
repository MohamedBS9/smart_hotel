import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUtilisateur } from './interface/interface.utilisateur';
import { UpdatePasswordDto } from './dto/update-password';
import * as  argon2 from 'argon2'
import { MailerService } from '@nestjs-modules/mailer';
import { promises } from 'dns';
import * as  crypto from 'crypto'
import { join } from 'path';


@Injectable()

export class UtilisateurService {
  constructor(@InjectModel('utilisateur') private utilisateurModel: Model<IUtilisateur>) { }
  async generteCode(): Promise<string> {
    return crypto.randomBytes(3).toString('hex').toUpperCase();
  }
  async findUtilisateur(email: string): Promise<IUtilisateur> {
    const utilisateur = await this.utilisateurModel.findOne({ email })
    if (!utilisateur) {
      throw new BadRequestException('utilisateur non trouver ')

    }
    return utilisateur
  }
  async findUtilisateurById(id: string) {
    const utilisateur = await this.utilisateurModel.findById(id)
   
    if (!utilisateur) {
      
      throw new BadRequestException('utilisateur non trouver')
    }
    return utilisateur
  }
  async updateUtilisateur(id: any, updateUtilisateurDto: UpdateUtilisateurDto) {
    const utilisateur = await this.utilisateurModel.findByIdAndUpdate(id,updateUtilisateurDto,{new:true})
    if (!utilisateur) {
      throw new NotFoundException('utilisateur non trouver')
    }
    return utilisateur
  }


  async updateToken(id:any, token: string) {
    const utilisateur = await this.utilisateurModel.findByIdAndUpdate(id,{refrechToken:token },{new:true})
    if (!utilisateur) {
      throw new NotFoundException('utilisateur non trouver')

    }
    return utilisateur

  }

  async hashedPassword(utilisateurId: string, updatePasswordDto: UpdatePasswordDto): Promise<void> {
    const { oldPassword, newPassword } = updatePasswordDto
    const utilisateur = await this.utilisateurModel.findById(utilisateurId)
    if (!utilisateur) {
      console.log('Error:old Password is incorrect');
      throw new NotFoundException('utilisateur non trouver ');
    }
    const isPasswordValid = await argon2.verify(utilisateur.motdepasse, oldPassword);
    if (!isPasswordValid) {
      throw new NotFoundException('Password is incorrect');
    }
    const hashedNewPassword = await argon2.hash(newPassword);
    await this.utilisateurModel.findByIdAndUpdate(utilisateurId, { motdepasse: hashedNewPassword }, { new: true })
  }


  async verificationCode(code:string,res:any):Promise<any>{
    try {
      const existingCode=await this.utilisateurModel.findOne({code})
      if(!existingCode){
        return res.sendFile(join(__dirname+'../../../verifyEmail/error.html'))
      }
      existingCode.code=null
      existingCode.verify=true
      await existingCode.save()
      return res.sendFile(join(__dirname+'../../../verifyEmail/correct.html'))
    } catch (error) {
      return error
      
    }
  }



}


