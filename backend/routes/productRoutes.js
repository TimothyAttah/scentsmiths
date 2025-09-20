import express from 'express';
import { productControllers } from '../controllers/productControllers.js';
import { protect, admin} from '../middleware/auth.js'

const productRouter = express.Router();

productRouter.get('/', productControllers.getAllProducts);

productRouter.get('/:id', productControllers.getOneProduct);

productRouter.delete('/:id/delete', protect, admin, productControllers.deleteProduct);

productRouter.post('/create', protect, admin, productControllers.createProduct);

productRouter.put('/:id/update', protect, admin, productControllers.updateProduct);


export default productRouter;
