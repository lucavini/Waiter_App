import { Router } from 'express';

import CategoryController from '../controllers/CategoryController';

const router = Router();

router.get('/', CategoryController.index);

router.post('/', CategoryController.store);

router.get('/:categoryId/products', CategoryController.indexProductsByCategoryId);

export default router;
