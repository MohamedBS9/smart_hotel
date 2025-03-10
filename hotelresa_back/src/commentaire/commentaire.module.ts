import { Module } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CommentaireController } from './commentaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentaireSchema } from './entities/commentaire.entity';
import { hotelSchema } from 'src/hotel/entities/hotel.entity';
import { UtilisateurSchema } from 'src/utilisateur/entities/utilisateur.entity';


@Module({
  imports:[MongooseModule.forFeature([{name:"commentaire",schema:CommentaireSchema},{name:"hotel",schema: hotelSchema},{name:"utilisateur",schema: UtilisateurSchema}])],
  controllers: [CommentaireController],
  providers: [CommentaireService],
})
export class CommentaireModule {}
