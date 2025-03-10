import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
@Post('signin')
  async signin(@Body() data: CreateAuthDto){
   return this.authService.signin(data)
}

@Post('forget')
  async PasseOublier(@Body() data: CreateAuthDto){
   return this.authService.PasseOublier(data.email)
}


@Post('resetmotdepasse/:token')
async restMotDePasse(@Param('token') token:string,@Body('newPassword') newPassword:string){
  return this.authService.restMotDePasse(token,newPassword);
}


}


