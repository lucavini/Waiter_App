import { Request, Response } from 'express';
import Category from '../models/schemas/Category';

class CategoryController {
  async listCategories(req: Request, res: Response) {
    const categories = await Category.find();

    res.json(categories);
  }

  async createCategories(req: Request, res: Response) {
    const { icon, name } = req.body;

    const category = await Category.create({ icon, name });

    res.json(category);
  }

  async findProductsByCategoryId(req: Request, res: Response) {
    res.send('ok category');
  }
}

export default new CategoryController();
