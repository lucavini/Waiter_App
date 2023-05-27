import OrderController from '@Controllers/OrderController';
import { Router } from 'express';

const router = Router();

router.get('/', OrderController.index);

router.post('/', OrderController.store);

router.patch('/:orderId', OrderController.update);

router.delete('/:orderId', OrderController.delete);

export default router;
