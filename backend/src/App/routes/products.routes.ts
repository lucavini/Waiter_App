import ProductController from '@Controllers/ProductController';
import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '../../../', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

const router = Router();

router.get('/', ProductController.index);

router.post('/', upload.single('image'), ProductController.store);

export default router;
