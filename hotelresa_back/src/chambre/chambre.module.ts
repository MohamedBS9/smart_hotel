import { Module } from '@nestjs/common';
import { ChambreService } from './chambre.service';
import { ChambreController } from './chambre.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { chambreSchema } from './entities/chambre.entity';
import { hotelSchema } from 'src/hotel/entities/hotel.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"chambre",schema: chambreSchema},{name:"hotel",schema: hotelSchema}])],
  controllers: [ChambreController],
  providers: [ChambreService],
})
export class ChambreModule {}
