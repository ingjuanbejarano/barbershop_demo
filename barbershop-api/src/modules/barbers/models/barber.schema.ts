import { Schema } from 'mongoose';

export const BarberSchema = new Schema({
  name: { type: String, required: true },
  idNumber: { type: Number, required: true },
  email: String,
  phoneNumber: { type: Number, required: true }
});
