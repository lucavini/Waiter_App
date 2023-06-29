import { Router } from 'express';

import CategoryController from '@Controllers/CategoryController';

const router = Router();

router.get('/', CategoryController.index);

router.post('/', CategoryController.store);

router.get('/:categoryId/products', CategoryController.indexProductsByCategoryId);

router.delete('/:categoryId', CategoryController.delete);

export default router;
