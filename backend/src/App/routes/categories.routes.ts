import { Router } from 'express';

import CategoryController from '../controllers/CategoryController';

const router = Router();

router.get('/', CategoryController.listCategories);

router.post('/', CategoryController.createCategories);

router.get('/:categoryId/products', CategoryController.findProductsByCategoryId);

export default router;
