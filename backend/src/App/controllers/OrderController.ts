import OrderRepository from '@Repositories/OrderRepository';
import { Request, Response } from 'express';
import { Status } from '~Enums/status';
import ResponseErrors from '~Errors/ResponseErrors';

class OrderController {
  async index(req: Request, res: Response) {
    try {
      const orders = await OrderRepository.listOrders();

      res.status(200).json(orders);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  async store(req: Request, res: Response) {
    try {
      const { table, products }: models.Order = req.body;

      const createdOrder = await OrderRepository.createOrder({
        table,
        products,
      });

      res.status(201).json(createdOrder);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const { status } = req.body;

      if (!(status in Status)) {
        return res
          .status(400)
          .json({ error: ResponseErrors.INVALID_ORDER_STATUS });
      }

      await OrderRepository.updateOrder(orderId, status);

      res.sendStatus(204);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { orderId } = req.params;

      await OrderRepository.deleteOrder(orderId);

      res.sendStatus(204);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  }
}

export default new OrderController();
