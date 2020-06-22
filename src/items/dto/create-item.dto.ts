import { Document } from 'mongoose';

export class CreateItemDto extends Document {
  readonly name: string;
  readonly qty: number;
  readonly description: string;
}
