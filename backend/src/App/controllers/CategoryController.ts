import { Request, Response } from 'express';
import CategoryRepository from '@Repositories/CategoryRepository';
import ResponseErrors from '~Errors/ResponseErrors';

class CategoryController {
  async index(req: Request, res: Response) {
    const categories = await CategoryRepository.listCategories();

    res.json(categories);
  }

  async store(req: Request, res: Response) {
    try {
      const { icon, name } = req.body;

      if (!icon) {
        return res.status(400).json({ error: ResponseErrors.ICON_REQUIRED });
      }
      
      if (!name) {
        return res.status(400).json({ error: ResponseErrors.ICON_REQUIRED });
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

  indexProductsByCategoryId(req: Request, res: Response) {
    res.send('ok category');
  }
}

export default new CategoryController();