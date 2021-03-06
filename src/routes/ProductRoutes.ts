import express from 'express';
import ProductController from '../products/ProductController';

const router = express.Router();
class ProductRoutes {
  private productController: ProductController;

  constructor() {
    this.productController = new ProductController();
  }
  get routes() {
    const controller = this.productController;
    router.get('/products', controller.retrieve);
    router.post('/products/', controller.retrieve);
    router.post('/product', controller.create);
    router.put('/product/:_id', controller.update);
    router.get('/product/:_id', controller.findById);
    router.delete('/product/:_id', controller.delete);

    return router;
  }
}

Object.seal(ProductRoutes);

export default ProductRoutes;
