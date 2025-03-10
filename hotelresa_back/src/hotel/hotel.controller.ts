import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Res, UploadedFiles } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer'
import { extname } from 'path';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @UseInterceptors(FilesInterceptor('files',10,{
    storage:diskStorage({
      destination:'./storage',
      filename:(req,file,cb)=>{
        cb(null,`${new Date().getTime()}${extname(file.originalname)}`)
      }
    })
  }))

  @Post('create')
    async createHotel(@Res() response, @Body() createHotelDto: CreateHotelDto,@UploadedFiles()files) {
      try {
        createHotelDto.gallery=files ? files.map(file=>file.filename):[]
        const newdata = await this.hotelService.createNewHotel(createHotelDto)
        
        return response.status(200).json({
          message: "hotel est cree",
          newdata
        })
  
      } catch (error) {
        return response.status(400).json({
          message: "hotel n est pas cree" + error,
        })
      }
    }


    
    @Get()
  async listehotel(@Res() response) {
    try {
      const listeData = await this.hotelService.listeHotel()
      return response.status(200).json({
        message: "liste de hotel",
        listeData
      })
    } catch (error) {
      return response.status(400).json({
        message: "failed to fetch data" + error
      })

    }
  }
  
  @Delete(':id')
  async deletehotel(@Res() response,@Param('id') hotelid) {
    try {
      const Data = await this.hotelService.deleteHotel(hotelid)
      return response.status(200).json({
        message: "hotel suprimer",
        Data
      })
    } catch (error) {
      return response.status(400).json({
        message: "hotel non trouver"
      })
    }
  }

  @Patch(':id')
  async  updatecour(@Res() response,@Param('id') hotelid:string,@Body() updateHotelDto:UpdateHotelDto ){
    try{
      const Dataup = await this.hotelService.updateHotel(hotelid,updateHotelDto)
      return response.status(200).json({
        message: " hotel update",
        Dataup

    })
  
    } catch(error){
    return response.status(400).json({
    message:"hotel not found"
    }) 
}
}

@Get(':id')
  async findhotel(@Res() response,@Param('id') hotelid :string) {
    try {
      const hotel = await this.hotelService.findHotel(hotelid)
      return response.status(200).json({
        message: " hotel trouver",
        hotel
      })
    } catch (error) {
      return response.status(400).json({
        message: "failed to fetch data"+error
      })

    }
  }

}
