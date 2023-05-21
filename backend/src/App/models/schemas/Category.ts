import { model, Schema } from 'mongoose';
import { Category as ICategory } from '../models';

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    required: true,
  },
});

export const Category = model('Category', categorySchema);
