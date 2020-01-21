import { Schema } from 'mongoose';

export const ServiceSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true }
});
