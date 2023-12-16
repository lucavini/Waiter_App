import Instance from './Api/Instance';

class CategoryService {
  categorieInstance: Instance;

  constructor() {
    this.categorieInstance = new Instance('/categories.php');
  }

  listCategories = () => {
    return this.categorieInstance.get<models.Category>();
  };

  createCategory = (newCategory: Omit<models.Category, '_id'>) => {
    return this.categorieInstance.post<Partial<models.Category>>({
      data: {
        ...newCategory,
      },
    });
  };

  updateCategory = (
    updatedCategory: Omit<models.Category, '_id'>,
    categoryId: string,
  ) => {
    return this.categorieInstance.update<Partial<models.Category>>({
      url: `${this.categorieInstance.path}/${categoryId}`,
      data: {
        ...updatedCategory,
      },
    });
  };

  deleteCategory = (categoryId: string) => {
    return this.categorieInstance.delete({
      url: `${this.categorieInstance.path}/${categoryId}`,
    });
  };
}

export default new CategoryService();
