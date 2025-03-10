import { Module } from '@nestjs/common';
import { FactureService } from './facture.service';
import { FactureController } from './facture.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FactureSchema } from './entities/facture.entity';

@Module({
   imports:[MongooseModule.forFeature([{name:"facture",schema: FactureSchema}])],
  controllers: [FactureController],
  providers: [FactureService],
})
export class FactureModule {}
