import { Request, Response } from 'express';
import Category from '../models/schemas/Category';

class CategoryController {
  async index(req: Request, res: Response) {
    const categories = await Category.find();

    res.json(categories);
  }

  async store(req: Request, res: Response) {
    try {
      const { icon, name } = req.body;

      const category = await Category.create({ icon, name });

      res.send(201).json(category);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

  async indexProductsByCategoryId(req: Request, res: Response) {
    res.send('ok category');
  }
}

export default new CategoryController();
