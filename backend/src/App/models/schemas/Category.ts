import { model, Schema } from 'mongoose';
import { Category as ICategory } from '../models';

const categorySchema = new Schema<ICategory>({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  icon: {
    type: String,
    unique: true,
    required: true,
  },
});

const Category = model('Category', categorySchema);

export default Category;
