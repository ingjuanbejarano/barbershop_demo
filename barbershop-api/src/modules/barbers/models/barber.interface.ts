import { Document } from 'mongoose';

export interface Barber extends Document {
  name: string;
  idNumber: number;
  email?: string;
  phoneNumber: number;
}
