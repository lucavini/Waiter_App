import Order from '@Models/Order';

class OrderRepository {
  async listOrders() {
    const orders = await Order.find()
      .populate('products.product')
      .sort({ createdAt: 1 });

    return orders;
  }

  async createOrder(newOrder: models.Order) {
    const { table, products }: models.Order = newOrder;

    const createdOrder = await Order.create({ table, products });

    return createdOrder;
  }

  async updateOrder(id: string, status: string) {
    await Order.findByIdAndUpdate(id, { status });

    return 204;
  }

  async deleteOrder(id: string) {
    await Order.findByIdAndDelete(id);

    return 204;
  }
}

export default new OrderRepository();
