import { Module } from '@nestjs/common';
import { HotelierService } from './hotelier.service';
import { HotelierController } from './hotelier.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { hotelierSchema } from './entities/hotelier.entity';
import { UtilisateurSchema } from 'src/utilisateur/entities/utilisateur.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"utilisateur",schema:UtilisateurSchema}])],
  controllers: [HotelierController],
  providers: [HotelierService],
})
export class HotelierModule {}
