import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { FactureService } from './facture.service';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';

@Controller('facture')
export class FactureController {
  constructor(private readonly factureService: FactureService) {}
   @Post('create')
      async createFacture(@Res() response, @Body() createFactureDto: CreateFactureDto) {
        try {
          const newdata = await this.factureService.createNewFacture(createFactureDto)
    
          return response.status(200).json({
            message: "Facture est cree",
            newdata
          })
    
        } catch (error) {
          return response.status(400).json({
            message: "Facture n'est pas cree" + error,
          })
        }
      }


      @Get()
      async listeFacture(@Res() response) {
        try {
          const listeData = await this.factureService.listeFacture()
          return response.status(200).json({
            message: "liste de Facture",
            listeData
          })
        } catch (error) {
          return response.status(400).json({
            message: "failed to fetch data" + error
          })
    
        }
      }


      @Delete(':id')
      async deleteFacture(@Res() response, @Param('id') chambreid) {
        try {
          const Data = await this.factureService.deleteFacture(chambreid)
          return response.status(200).json({
            message: "Facture suprimer",
            Data
          })
        } catch (error) {
          return response.status(400).json({
            message: "Facture non trouver"
          })
        }
      }


      @Patch(':id')
          async updateFacture(@Res() response, @Param('id') factureid: string, @Body() updateFactureDto:UpdateFactureDto) {
            try {
              const Dataup = await this.factureService.updateFacture(factureid, updateFactureDto)
              return response.status(200).json({
                message: " Facture update",
                Dataup
        
              })
        
            } catch (error) {
              return response.status(400).json({
                message: "Facture  not found"
              })
            }
          }


          @Get(':id')
          async findFacture(@Res() response, @Param('id') factureid: string) {
            try {
              const facture = await this.factureService.findFacture(factureid)
              return response.status(200).json({
                message: " Facture trouver",
                facture
              })
            } catch (error) {
              return response.status(400).json({
                message: "failed to fetch data" + error
              })
        
            }
          }
    

 
}
