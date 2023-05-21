import { Router } from 'express';

import CategoriesRoutes from './categories.routes';
import ProductsRoutes from './products.routes';
import OrdersRoutes from './orders.routes';

export const router = Router();

// Categories
router.use('/categories', CategoriesRoutes);

// Products
router.use('/products', ProductsRoutes);

// Orders
router.use('/orders', OrdersRoutes);

