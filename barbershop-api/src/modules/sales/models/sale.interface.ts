import { Document } from 'mongoose';

export interface Sale extends Document {
  barber: string;
  service: string;
  price: number;
}
