import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { HotelierService } from './hotelier.service';
import { CreateHotelierDto } from './dto/create-hotelier.dto';
import { UpdateHotelierDto } from './dto/update-hotelier.dto';
import { extname } from 'path';
import {diskStorage} from 'multer'
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('hotelier')
export class HotelierController {
  constructor(private readonly hotelierService: HotelierService) {}
   @UseInterceptors(FileInterceptor('file',{
      storage:diskStorage({
        destination:'./storage',
        filename:(req,file,cb)=>{
          cb(null,`${new Date().getTime()}${extname(file.originalname)}`)
        }
      })
    }))

 
  @Post('create')
    async createHotelier(@Res() response, @Body()createHotelierDto: CreateHotelierDto,@UploadedFile() file ) {
      try {
        createHotelierDto.image=file.filename
        const newdata = await this.hotelierService.createHotelier(createHotelierDto)
      
        return response.status(200).json({
          message: "hotelier est cree",
          newdata
        })
  
      } catch (error) {
        return response.status(400).json({
          message: "hotelier n'est pas cree  " + error,
        })
      }
  }


  @Get()
    async listeHotelier(@Res() response) {
      try {
        const listeData = await this.hotelierService.listeHotelier()
        return response.status(200).json({
          message: "liste de Hotelier",
          listeData
        })
      } catch (error) {
        return response.status(400).json({
          message: "failed to fetch data" + error
        })
  
      }
    }
  
  
    @Delete(':id')
    async deleteHotelier(@Res() response, @Param('id') hotelierid) {
      try {
        const Data = await this.hotelierService.deleteHotelier(hotelierid)
        return response.status(200).json({
          message: "hotelier suprimer",
          Data
        })
      } catch (error) {
        return response.status(400).json({
          message: "hotelier non trouver"
        })
      }
    }
  
  
    @Patch(':id')
    async updateHotelier(@Res() response, @Param('id') hotelier: string, @Body()updateHotelierDto:UpdateHotelierDto) {
      try {
        const Dataup = await this.hotelierService.updateHotelier(hotelier, updateHotelierDto)
        return response.status(200).json({
          message: "Hoteier update",
          Dataup
        })
  
      } catch (error) {
        return response.status(400).json({
          message: "Hoteier not found"
        })
      }
    }
  
  
    @Get(':id')
    async findHotelier(@Res() response, @Param('id') hotelierid:string) {
      try {
        const hotelier = await this.hotelierService.findHotelier(hotelierid)
        return response.status(200).json({
          message: " Hoteier trouver",
          hotelier
        })
      } catch (error) {
        return response.status(400).json({
          message: "failed to fetch data" + error
        })
      }
    }


}
