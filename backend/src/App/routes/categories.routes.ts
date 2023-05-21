import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('OK get categories');
});

router.post('/', (req, res) => {
  res.send('OK post categories');
});

router.get('/:categoryId/products', (req, res) => {
  res.send('OK category products');
});

export default router;
