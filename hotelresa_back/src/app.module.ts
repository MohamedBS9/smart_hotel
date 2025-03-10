import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { HotelModule } from './hotel/hotel.module';
import { AdministrateurModule } from './administrateur/administrateur.module';
import { ChambreModule } from './chambre/chambre.module';
import { ReservationModule } from './reservation/reservation.module';
import { HotelierModule } from './hotelier/hotelier.module';
import { PaiementModule } from './paiement/paiement.module';
import { ClientModule } from './client/client.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { FactureModule } from './facture/facture.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017",{dbName:"hotelresadb"}), UtilisateurModule, HotelModule, AdministrateurModule, ChambreModule, ReservationModule, HotelierModule, PaiementModule, ClientModule, CommentaireModule, AuthModule,ConfigModule.forRoot({isGlobal:true}), FactureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
