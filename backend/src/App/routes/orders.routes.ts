import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('OK get orders');
});

router.post('/', (req, res) => {
  res.send('OK');
});

router.patch('/:orderId', (req, res) => {
  res.send('OK');
});

router.delete('/:orderId', (req, res) => {
  res.send('OK');
});

export default router;
