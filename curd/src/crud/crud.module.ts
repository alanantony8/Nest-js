import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Crud, CrudSchema } from './schema/crud.schema';
import { CrudService } from './crud.service';
import { CrudController } from './crud.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Crud.name, schema: CrudSchema }])],
    controllers: [CrudController],
    providers: [CrudService],
})
export class CrudModule { }
