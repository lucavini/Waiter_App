import Category from '@Models/Category';
import Product from '@Models/Product';

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

  async listProductsByCategoryId(id: string) {
    const products = await Product.find().where('category').equals(id);

    return products;
  }
}

export default new CategoryRepository();
