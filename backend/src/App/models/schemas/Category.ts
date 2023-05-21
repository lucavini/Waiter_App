import { model, Schema } from 'mongoose';

const categorySchema = new Schema<models.Category>({
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
