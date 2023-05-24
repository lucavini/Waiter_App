import './path.config';
import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './App/routes/router';
import errorHandler from './App/middlewares/errorHandler';

mongoose
  .connect('mongodb://localhost:27017/WaiterApp')
  .then(() => {
    const app = express();
    const port = 3333;

    app.use(express.json());
    app.use(router);
    app.use(errorHandler);
    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads')),
    );

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('mongo connection refused'));
