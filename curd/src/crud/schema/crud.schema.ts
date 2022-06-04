import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CrudDocument = Crud & Document;

@Schema()
export class Crud {
  @Prop()
  title: string;

  @Prop()
  description?: number;

  @Prop()
  isDeleted?: string;
}

export const CrudSchema = SchemaFactory.createForClass(Crud);