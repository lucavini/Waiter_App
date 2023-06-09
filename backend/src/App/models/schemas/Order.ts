import { model, Schema } from 'mongoose';
import { Status } from '~Enums/status';
import { Order as IOrder } from '../models';

const orderSchema = new Schema<IOrder>({
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

const Order = model('Order', orderSchema);

export default Order;
