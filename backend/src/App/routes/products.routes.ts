import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('OK get products');
});

router.post('/', (req, res) => {
  res.send('OK post products');
});

export default router;
