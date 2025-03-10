import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationSchema } from './entities/reservation.entity';
import { chambreSchema } from 'src/chambre/entities/chambre.entity';
import { UtilisateurSchema } from 'src/utilisateur/entities/utilisateur.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:"reservation",schema: ReservationSchema},{name:"chambre",schema: chambreSchema},{name:"utilisateur",schema: UtilisateurSchema}])],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
