import { Schema } from 'mongoose';

export const SaleSchema = new Schema({
  barber: { type: String, required: true },
  service: { type: String, required: true },
  price: { type: Number, required: true }
});
