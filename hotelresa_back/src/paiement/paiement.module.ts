import { Module } from '@nestjs/common';
import { PaiementService } from './paiement.service';
import { PaiementController } from './paiement.controller';
import { PaiementSchema } from './entities/paiement.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:"paiement",schema: PaiementSchema}])],
  controllers: [PaiementController],
  providers: [PaiementService],
})
export class PaiementModule {}
