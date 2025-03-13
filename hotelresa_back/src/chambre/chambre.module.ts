import { Module } from '@nestjs/common';
import { ChambreService } from './chambre.service';
import { ChambreController } from './chambre.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { chambreSchema } from './entities/chambre.entity';
import { hotelSchema } from 'src/hotel/entities/hotel.entity';
import { ReservationSchema } from 'src/reservation/entities/reservation.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"chambre",schema: chambreSchema},{name:"hotel",schema: hotelSchema},{name:"reservation",schema: ReservationSchema}])],
  controllers: [ChambreController],
  providers: [ChambreService],
})
export class ChambreModule {}
