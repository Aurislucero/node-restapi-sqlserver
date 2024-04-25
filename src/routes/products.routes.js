import {Router} from 'express';
import {getProducts,createNewProduct,getProductById,deleteProduct,getTotalProducts,updateProduct} from '../controllers/products.controller'

const router = Router()

router.get('/products',getProducts)
router.post('/products',createNewProduct)
router.get('/products/count',getTotalProducts)
router.delete('/products/:id', deleteProduct)
router.get('/products/:id',getProductById)
router.put('/products/:id',updateProduct)

updateProduct
export default router