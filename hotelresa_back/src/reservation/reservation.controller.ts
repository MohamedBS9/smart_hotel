import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UploadedFiles } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}
  
  
  
  @Post('create')
    async createReservation(@Res() response, @Body() createReservationDto: CreateReservationDto) {
      try {
        const newdata = await this.reservationService.createNewReservation(createReservationDto)
  
        return response.status(200).json({
          message: "Reservation est cree",
          newdata
        })
  
      } catch (error) {
        return response.status(400).json({
          message: "Reservation n'est pas cree" + error,
        })
      }
    }
  
    @Get()
    async listeReservation(@Res() response) {
      try {
        const listeData = await this.reservationService.listeResevation()
        return response.status(200).json({
          message: "liste de reservation",
          listeData
        })
      } catch (error) {
        return response.status(400).json({
          message: "failed to fetch data" + error
        })
  
      }
    }
  
  
    @Delete(':id')
    async deleteReservation(@Res() response, @Param('id') chambreid) {
      try {
        const Data = await this.reservationService.deleteReservation(chambreid)
        return response.status(200).json({
          message: "reservation suprimer",
          Data
        })
      } catch (error) {
        return response.status(400).json({
          message: "reservation non trouver"
        })
      }
    }
  
  
    @Patch(':id')
    async updateReservation(@Res() response, @Param('id') reservationid: string, @Body() updateReservationDto:UpdateReservationDto) {
      try {
        const Dataup = await this.reservationService.updateReservation(reservationid, updateReservationDto)
        return response.status(200).json({
          message: " reservation update",
          Dataup
  
        })
  
      } catch (error) {
        return response.status(400).json({
          message: "reservation not found"
        })
      }
    }
  
  
    @Get(':id')
    async findReservation(@Res() response, @Param('id') reservationid: string) {
      try {
        const reservation = await this.reservationService.findReservation(reservationid)
        return response.status(200).json({
          message: " Reservation trouver",
          reservation
        })
      } catch (error) {
        return response.status(400).json({
          message: "failed to fetch data" + error
        })
  
      }
    }
  

  
}
