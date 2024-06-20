import { Router } from 'express'
import multer from 'multer'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { UserDetailsController } from './controllers/user/UserDetailsController'

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoriesController } from './controllers/category/ListCategoriesController'

import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'

import { CreateOrderController } from './controllers/order/CreateOrderController'
import { CancelOrderController } from './controllers/order/CancelOrderController'
import { AddOrderItemController } from './controllers/order/AddOrderItemController'
import { RemoveOrderItemController } from './controllers/order/RemoveOrderItemController'
import { SendOrderController } from './controllers/order/SendOrderController'
import { ListOrdersController } from './controllers/order/ListOrdersController'
import { OrderDetailsController } from './controllers/order/OrderDetailsController'
import { CloseOrderController } from './controllers/order/CloseOrderController'

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const router = Router()

const upload = multer(uploadConfig.upload('./tmp'))

// user routes
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new UserDetailsController().handle)

// category routes
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new ListCategoriesController().handle)

// product routes
router.post('/product', isAuthenticated, upload.single('banner'), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// order routes
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new CancelOrderController().handle)
router.post('/order/add', isAuthenticated, new AddOrderItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveOrderItemController().handle)
router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.get('/orders', isAuthenticated, new ListOrdersController().handle)
router.get('/order/detail', isAuthenticated, new OrderDetailsController().handle)
router.put('/order/close', isAuthenticated, new CloseOrderController().handle)

export { router }
