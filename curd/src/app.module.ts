import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/crud'), CrudModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
