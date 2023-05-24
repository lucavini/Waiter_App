import ProductRepository from '@Repositories/ProductRepository';
import { Request, Response } from 'express';
import ResponseErrors from '~Errors/ResponseErrors';

class ProductController {
  async index(req: Request, res: Response) {
    try {
      const categories = await ProductRepository.listProducts();

      res.json(categories);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

  async store(req: Request, res: Response) {
    try {
      const imagePath = req.file?.filename;
      const { name, description, price, category, ingredients } = req.body;

      if (!imagePath) {
        return res.status(400).json({
          error: ResponseErrors.PRODUCT_IMAGE_REQUIRED,
        });
      }

      const createdProduct = await ProductRepository.createProduct({
        name,
        description,
        price: Number(price),
        category,
        ingredients: JSON.parse(ingredients),
        imagePath: imagePath,
      });

      res.status(201).json(createdProduct);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
}

export default new ProductController();
