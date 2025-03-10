import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpStatus, Res } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { response } from 'express';
import { UpdatePasswordDto } from './dto/update-password';
import { STATUS_CODES } from 'http';


@Controller('utilisateur')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) { }
  @Put(':id')
  async updatePassword(@Res() response, @Param('id') id: string, @Body() updatePasswordDto: UpdatePasswordDto,) {
    try {
      await this.utilisateurService.hashedPassword(id, updatePasswordDto);
      return response.status(HttpStatus.NO_CONTENT).send();
      


    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: ' error:mot de passe de l utiliser n est pas modifier ',
        error: error.message || error.toString(),
      })

    }
  }

  @Get('verify/:code')
  async verificationCode(@Param('code') code:string,@Res()response){
    return this.utilisateurService.verificationCode(code,response)
  }
}
