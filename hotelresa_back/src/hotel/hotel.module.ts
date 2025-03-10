import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { hotelSchema } from './entities/hotel.entity';
import { UtilisateurSchema } from 'src/utilisateur/entities/utilisateur.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"hotel",schema: hotelSchema},{name:"utilisateur",schema: UtilisateurSchema}])],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
