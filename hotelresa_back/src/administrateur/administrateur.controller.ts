import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException } from '@nestjs/common';
import { AdministrateurService } from './administrateur.service';
import { CreateAdministrateurDto } from './dto/create-administrateur.dto';
import { UpdateAdministrateurDto } from './dto/update-administrateur.dto';
import { IAdministrateur } from './interface/interface.administrateur';

@Controller('administrateur')
export class AdministrateurController {
  constructor(private readonly administrateurService: AdministrateurService) {}
  @Post('create')
  async createAdmin(@Res() response, @Body() createAdministrateurDto: CreateAdministrateurDto) {
    try {
      const newdata = await this.administrateurService.createNewAdministrateur(createAdministrateurDto)
      
      return response.status(200).json({
        message: "admin est cree",
        newdata
      })

    } catch (error) {
      return response.status(400).json({
        message: "admin n'est pas cree" + error,
      })
    }
  }

@Patch(':id')
    async updateAdministrateur(@Res() response, @Param('id') Administrateurid: string, @Body() updateAdministrateurDto:UpdateAdministrateurDto) {
      try {
        const Dataup = await this.administrateurService.updateAdministrateur(Administrateurid, updateAdministrateurDto)
        return response.status(200).json({
          message: " Administrateur update",
          Dataup
  
        })
  
      } catch (error) {
        return response.status(400).json({
          message: "Administrateur not found"
        })
      }
    }

    
    @Get(':id')
    async findAdministrateur(@Res() response, @Param('id') administrateurid: string) {
      try {
        const administrateur = await this.administrateurService.findAdministrateur(administrateurid)
        return response.status(200).json({
          message: " administrateur trouver",
          administrateur
        })
      } catch (error) {
        return response.status(400).json({
          message: "administrateur to fetch data" + error
        })
  
      }
    }


    




}
