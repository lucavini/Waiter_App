import Category from '../models/schemas/Category';

class CategoryRepository {
  async listCategories() {
    const categories = await Category.find();

    return categories;
  }

  async createCategory(category: models.Category) {
    const { icon, name } = category;

    const createdCategory = await Category.create({ icon, name });

    return createdCategory;
  }
}

export default new CategoryRepository();
