import { Router } from 'express'
import multer from 'multer'

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { UserDetailsController } from './controllers/user/UserDetailsController'

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoriesController } from './controllers/category/ListCategoriesController'

import { CreateProductController } from './controllers/product/CreateProductController'

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

export { router }