import Product from '@Models/Product';

class ProductRepository {
  async listProducts() {
    const products = await Product.find();

    return products;
  }

  async createProduct(product: models.Product) {
    const createdProduct = await Product.create(product);
    
    return createdProduct;
  }
}

export default new ProductRepository();
