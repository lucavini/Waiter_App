import { model, Schema } from 'mongoose';

const productSchema = new Schema<models.Product>({
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

export const Product = model('Product', productSchema);
