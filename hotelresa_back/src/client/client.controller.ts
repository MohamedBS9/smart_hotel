import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import {diskStorage} from 'multer'
import { extname } from 'path';
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @UseInterceptors(FileInterceptor('file',{
    storage:diskStorage({
      destination:'./storage',
      filename:(req,file,cb)=>{
        cb(null,`${new Date().getTime()}${extname(file.originalname)}`)
      }
    })
  }))
  
@Post('create')
  async createClient(@Res() response, @Body()createClientDto: CreateClientDto,@UploadedFile() file ) {
    try {
      createClientDto.image= file.filename
      const newdata = await this.clientService.createClient(createClientDto)
    
      return response.status(200).json({
        message: "client est cree",
        newdata
      })

    } catch (error) {
      return response.status(400).json({
        message: "client n'est pas cree  " + error,
      })
    }
}



@Get()
  async listeClient(@Res() response) {
    try {
      const listeData = await this.clientService.listeClient()
      return response.status(200).json({
        message: "liste de client",
        listeData
      })
    } catch (error) {
      return response.status(400).json({
        message: "failed to fetch data" + error
      })

    }
  }


  @Delete(':id')
  async deleteClient(@Res() response, @Param('id') clientid) {
    try {
      const Data = await this.clientService.deleteClient(clientid)
      return response.status(200).json({
        message: "Client suprimer",
        Data
      })
    } catch (error) {
      return response.status(400).json({
        message: "Client non trouver"
      })
    }
  }


  @Patch(':id')
  async updateClient(@Res() response, @Param('id') clientid: string, @Body() updateClientDto: UpdateClientDto) {
    try {
      const Dataup = await this.clientService.updateClient(clientid, updateClientDto)
      return response.status(200).json({
        message: "Client update",
        Dataup

      })

    } catch (error) {
      return response.status(400).json({
        message: "Client not found"
      })
    }
  }


  @Get(':id')
  async findClient(@Res() response, @Param('id') clientid: string) {
    try {
      const chambre = await this.clientService.findClient(clientid)
      return response.status(200).json({
        message: " Client trouver",
        chambre
      })
    } catch (error) {
      return response.status(400).json({
        message: "failed to fetch data" + error
      })

    }
  }

}