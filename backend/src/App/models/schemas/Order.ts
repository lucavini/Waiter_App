import { model, Schema } from 'mongoose';
import { Status } from '../enums/status';

const orderSchema = new Schema<models.Order>({
  table: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: Status,
    default: Status.WAITING,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  products: {
    required: true,
    type: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          required: true,
        },
      },
    ],
  },
});

export const Order = model('Order', orderSchema);
