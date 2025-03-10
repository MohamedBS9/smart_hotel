import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ChambreService } from './chambre.service';
import { CreateChambreDto } from './dto/create-chambre.dto';
import { UpdateChambreDto } from './dto/update-chambre.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path';

@Controller('chambre')
export class ChambreController {
  constructor(private readonly chambreService: ChambreService) { }
  @UseInterceptors(FilesInterceptor('files', 10, {
    storage: diskStorage({
      destination: './storage',
      filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}${extname(file.originalname)}`)
      }
    })
  }))

  @Post('create')
  async createCambre(@Res() response, @Body() createChambreDto: CreateChambreDto, @UploadedFiles() files) {
    try {
      createChambreDto.photo = files ? files.map(file => file.filename) : []
      const newdata = await this.chambreService.createNewChambre(createChambreDto)

      return response.status(200).json({
        message: "chambre est cree",
        newdata
      })

    } catch (error) {
      return response.status(400).json({
        message: "chambre n'est pas cree" + error,
      })
    }
  }

  @Get()
  async listeChambre(@Res() response) {
    try {
      const listeData = await this.chambreService.listeChambre()
      return response.status(200).json({
        message: "liste de chambre",
        listeData
      })
    } catch (error) {
      return response.status(400).json({
        message: "failed to fetch data" + error
      })

    }
  }


  @Delete(':id')
  async deleteChambre(@Res() response, @Param('id') chambreid) {
    try {
      const Data = await this.chambreService.deleteChambre(chambreid)
      return response.status(200).json({
        message: "chambre suprimer",
        Data
      })
    } catch (error) {
      return response.status(400).json({
        message: "chambre non trouver"
      })
    }
  }


  @Patch(':id')
  async updateChambre(@Res() response, @Param('id') chambreid: string, @Body() updateChambreDto: UpdateChambreDto) {
    try {
      const Dataup = await this.chambreService.updateChambre(chambreid, updateChambreDto)
      return response.status(200).json({
        message: " chambre update",
        Dataup

      })

    } catch (error) {
      return response.status(400).json({
        message: "chambre not found"
      })
    }
  }


  @Get(':id')
  async findChambre(@Res() response, @Param('id') chambreid: string) {
    try {
      const chambre = await this.chambreService.findChambre(chambreid)
      return response.status(200).json({
        message: " chambre trouver",
        chambre
      })
    } catch (error) {
      return response.status(400).json({
        message: "failed to fetch data" + error
      })

    }
  }



}
