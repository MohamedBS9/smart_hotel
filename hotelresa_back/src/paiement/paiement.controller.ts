import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { PaiementService } from './paiement.service';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';

@Controller('paiement')
export class PaiementController {
  constructor(private readonly paiementService: PaiementService) {}

   @Post('create')
        async createFacture(@Res() response, @Body() createPaiementDto: CreatePaiementDto) {
          try {
            const newdata = await this.paiementService.createNewPaiement(createPaiementDto)
      
            return response.status(200).json({
              message: "Paiement est cree",
              newdata
            })
      
          } catch (error) {
            return response.status(400).json({
              message: "Paiement n'est pas cree" + error,
            })
          }
        }

  

  
}
