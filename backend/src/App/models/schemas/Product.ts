import { model, Schema } from 'mongoose';
import { Product as IProduct } from '../models';

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  imagePath: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  ingredients: {
    required: true,
    type: [
      {
        name: String,
        icon: String,
      },
    ],
  },

  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
});

const Product = model('Product', productSchema);

export default Product;
