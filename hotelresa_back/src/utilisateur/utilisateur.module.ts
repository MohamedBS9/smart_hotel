import { Module } from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { UtilisateurController } from './utilisateur.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UtilisateurSchema } from './entities/utilisateur.entity';
import { AdministrateurSchema } from 'src/administrateur/entities/administrateur.entity';
import { hotelierSchema } from 'src/hotelier/entities/hotelier.entity';
import { ClientSchema } from 'src/client/entities/client.entity';


@Module({
  imports:[MongooseModule.forFeature([{name:"utilisateur",schema: UtilisateurSchema,discriminators:[{name:"administrateur",schema:AdministrateurSchema},{name:"client",schema:ClientSchema},{name:"hotelier",schema:hotelierSchema}]}])],
  controllers: [UtilisateurController],
  providers: [UtilisateurService],
  exports:[UtilisateurService]
})
export class UtilisateurModule {}
