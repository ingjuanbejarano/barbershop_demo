import { Document } from 'mongoose';

export interface Service extends Document {
  title: string;
  description?: string;
  price: number;
}
