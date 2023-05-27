import { Request, Response } from 'express';
import CategoryRepository from '@Repositories/CategoryRepository';
import ResponseErrors from '~Errors/ResponseErrors';

class CategoryController {
  async index(req: Request, res: Response) {
    try {
      const categories = await CategoryRepository.listCategories();

      res.json(categories);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

  async store(req: Request, res: Response) {
    try {
      const { icon, name } = req.body;

      if (!icon) {
        return res.status(400).json({
          error: ResponseErrors.ICON_REQUIRED,
        });
      }

      if (!name) {
        return res.status(400).json({
          error: ResponseErrors.NAME_REQUIRED,
        });
      }

      const category = await CategoryRepository.createCategory({
        icon,
        name,
      });

      res.status(201).json(category);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

  async indexProductsByCategoryId(req: Request, res: Response) {
    try {
      const { categoryId } = req.params;
      const products = await CategoryRepository.listProductsByCategoryId(categoryId);

      res.json(products);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
}

export default new CategoryController();
