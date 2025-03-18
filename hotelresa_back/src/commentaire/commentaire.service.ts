import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { ICommentaire } from './interface/interface.commentaire';
import { IHotel } from 'src/hotel/interface/interface.hotel';
import { IUtilisateur } from 'src/utilisateur/interface/interface.utilisateur';
import { Document } from 'mongoose';
import { IClient } from 'src/client/interface/interface.client';

@Injectable()
export class CommentaireService {
   constructor(@InjectModel('commentaire') private commentaireModel:Model<ICommentaire>,
   @InjectModel('hotel') private hotelModel:Model<IHotel>,@InjectModel('utilisateur') private clientModel:Model<IClient>){}

   async createNewCommentaire(createCommentaireDto: CreateCommentaireDto): Promise<ICommentaire> {
    const newCommentaire = await new this.commentaireModel(createCommentaireDto)
       const saveCommentaire= await newCommentaire.save()as ICommentaire
       const hotelId= await this.hotelModel.findById(createCommentaireDto.hotel)
       const clientId = await this.clientModel.findById(createCommentaireDto.client)
        if (hotelId) {
          hotelId.commentaire.push(saveCommentaire._id as mongoose.Types.ObjectId)
              const savehotel = await hotelId.save()
              console.log(savehotel)
        }
       if (clientId) {
         clientId.commentaire.push(saveCommentaire._id as mongoose.Types.ObjectId)
         const saveutilisateeur = await clientId.save()
         console.log(saveutilisateeur) 
        }
       return saveCommentaire
     }

     
  

    
   
     async listeCommentaire(): Promise<ICommentaire[]> {
       const listeData = await this.commentaireModel.find()
       if (!listeData) {
         throw new BadRequestException('datanot found ')
   
       }
       return listeData
     }
   
     async deleteCommentaire(id: string): Promise<ICommentaire> {
       const listeData = await this.commentaireModel.findByIdAndDelete(id)
       if (!listeData) {
         throw new BadRequestException('data with this id does not found ')
       }
        const updateHotel = await this.hotelModel.findById(listeData.hotel);
           if(updateHotel){
             updateHotel.commentaire =  updateHotel.commentaire.filter(commentaireId => commentaireId.toString()!== id);
           await  updateHotel.save();
           }else{
           throw new NotFoundException(`commentaire #${id} not found in hotel`);
           }
          
           const updateClient = await this.clientModel.findById(listeData.client);
           if(updateClient){
             updateClient.commentaire =  updateClient.commentaire.filter(commentaireId => commentaireId.toString()!== id);
           await  updateClient.save();
           }else{
           throw new NotFoundException(`commentaire #${id} not found in hotel`);
           }       
      return listeData
    }
   
     async updateCommentaire(id: string, updateCommentaireDto: UpdateCommentaireDto): Promise<ICommentaire> {
       const updateCommentaire = await this.commentaireModel.findByIdAndUpdate(id, updateCommentaireDto, { new: true })
       if (!updateCommentaire) {
         throw new BadRequestException('Commentaire not found')
       }
       return updateCommentaire
     }
   
     async findCommentaire(id: string): Promise<ICommentaire> {
       const commentaire= await this.commentaireModel.findById(id)
       if (!commentaire) {
         throw new BadRequestException('Commentaire not found ')
   
       }
       return commentaire
     }

  
}
