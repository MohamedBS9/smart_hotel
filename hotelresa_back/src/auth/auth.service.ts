import { BadRequestException, Injectable, NotFoundException, Options } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UtilisateurService } from 'src/utilisateur/utilisateur.service';
import * as  argon2 from 'argon2'
import { ConfigService } from '@nestjs/config';
import { UpdateUtilisateurDto } from 'src/utilisateur/dto/update-utilisateur.dto';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { IUtilisateur } from 'src/utilisateur/interface/interface.utilisateur';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { MailerService } from '@nestjs-modules/mailer';
import * as crypto from 'crypto'

@Injectable()
export class AuthService {
  constructor(private jwtServise: JwtService, private utilisateurService: UtilisateurService, private configService: ConfigService, private mailerService: MailerService) { }
  async signin(data: CreateAuthDto) {
    const utilisateur = await this.utilisateurService.findUtilisateur(data.email)
    if (!utilisateur) {
      throw new BadRequestException('utilisateur not found ')
    }
    const motdepasseVerify = await argon2.verify(utilisateur.motdepasse, data.motdepasse)
    if (!motdepasseVerify) {
      throw new BadRequestException('mot de passe incorrect ')
    }
    const tokens = await this.getTokens(utilisateur._id, utilisateur.nom)

    await this.updateRefreshToken(utilisateur._id, tokens.refreshToken)
    return { utilisateur, tokens }
  }

  async getTokens(userId: any, username: string) {
    const [accesstoken, refreshToken] = await Promise.all([
      this.jwtServise.signAsync(
        { sub: userId, username },
        { secret: this.configService.get<string>('Jwt_ACCESS_SECRET'), expiresIn: '15m' }
      ),
      this.jwtServise.signAsync(
        { sub: userId, username },
        { secret: this.configService.get<string>('Jwt_REFRESH_SECRET'), expiresIn: '7d' }

      )
    ])
    return { accesstoken, refreshToken }
  }

  async updateRefreshToken(utilisateurId: any, refreshToken: string) {
    const hashedRefeshToken = await argon2.hash(refreshToken)
    await this.utilisateurService.updateUtilisateur(utilisateurId, { refreshToken: hashedRefeshToken })
  }

  async PasseOublier(email: string) {
    try {
      const utilisateur = await this.utilisateurService.findUtilisateur(email)
      if (!utilisateur) {
        throw new BadRequestException('utilisateur not found ')
      }
      // const token = await this.jwtServise.signAsync(
      //   { id: utilisateur._id },
      //   { secret: this.configService.get<string>('Jwt_ACCESS_SECRET'), expiresIn: '15m' })
      // await this.utilisateurService.updateToken(utilisateur._id, token)
      const resetCode = crypto.randomInt(100000, 999999).toString();
      utilisateur.resetCode = resetCode
      utilisateur.resetCodeExpires = new Date(Date.now()+5*60*1000)
      await utilisateur.save()
      const options = {
        to: utilisateur.email,
        subject: 'mot de passe oubiler',
        html: `<h1> Réinitialisation du mot de passe </h1>
               <p>Votre code de réinitialisation est : <strong>${resetCode}</strong></p>
               <p>Ce code expire dans 5 minutes.</p> <a href=http://localhost:3000/auth/reset/${resetCode}>clic here </a>`
      }
      await this.mailerService.sendMail(options)
      return {
        success: true,
        message: 'vous pouver modifier votre mot de passe',
        data: utilisateur
      }
    }
    catch (error) {
      return {
        message: 'erreur pour envouyer un mail' + error
      }
    }
  }

  async restMotDePasse(email:string,resetCode:string,newPassword:string,){
    try {
      // const payload=await this.jwtServise.verify(token,{
      //   secret:this.configService.get<string>('Jwt_ACCESS_SECRET'),
      // });
      // const utilisateur=await this.utilisateurService.findUtilisateurById(payload.id);
      // 
      const utilisateur=await this.utilisateurService.findUtilisateur(email);
      if (!utilisateur) {
        throw new NotFoundException('utilisateur  non trouver'); 
      }
      const hashedPassword=await argon2.hash(newPassword);
      await this.utilisateurService.updateUtilisateur(utilisateur._id,{
        motdepasse:hashedPassword,
        resetCode:undefined,
        resetCodeExpires:undefined,
      });
      return{
        success:true,
        message:'mot de passe modifier avec succés'
      };
    } catch (error) {
      throw new BadRequestException('modification du mot de passe est echoue:'+error.message)
      
    }
  }

}



