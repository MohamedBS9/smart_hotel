import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';

@Controller('commentaire')
export class CommentaireController {
  constructor(private readonly commentaireService:CommentaireService){}
 @Post('create')
  async createNewCommentaire(@Res() response, @Body() createCommentaireDto: CreateCommentaireDto,) {
    try {
      
      const newdata = await this.commentaireService.createNewCommentaire(createCommentaireDto)

      return response.status(200).json({
        message: "commentaire est cree",
        newdata
      })

    } catch (error) {
      return response.status(400).json({
        message: "Commentaire n'est pas cree" + error,
      })
    }
  }

  @Get()
  async listeCommentaire(@Res() response) {
    try {
      const listeData = await this.commentaireService.listeCommentaire()
      return response.status(200).json({
        message: "liste de Commentaire",
        listeData
      })
    } catch (error) {
      return response.status(400).json({
        message: "failed to fetch data" + error
      })

    }
  }


  @Delete(':id')
  async deleteCommentaire(@Res() response, @Param('id') commentaireid) {
    try {
      const Data = await this.commentaireService.deleteCommentaire(commentaireid)
      return response.status(200).json({
        message: "Commentaire suprimer",
        Data
      })
    } catch (error) {
      return response.status(400).json({
        message: "Commentaire non trouver"
      })
    }
  }


  @Patch(':id')
  async updateCommentaire(@Res() response, @Param('id') chambreid: string, @Body() updateCommentaireDto: UpdateCommentaireDto) {
    try {
      const Dataup = await this.commentaireService.updateCommentaire(chambreid, updateCommentaireDto)
      return response.status(200).json({
        message: " Commentaire update",
        Dataup

      })

    } catch (error) {
      return response.status(400).json({
        message: "Commentaire not found"
      })
    }
  }


  @Get(':id')
  async findCommentaire(@Res() response, @Param('id') commentaireid: string) {
    try {
      const commentaire = await this.commentaireService.findCommentaire(commentaireid)
      return response.status(200).json({
        message: " Commentaire trouver",
        commentaire
      })
    } catch (error) {
      return response.status(400).json({
        message: "failed to fetch data" + error
      })

    }
  }
  
}
