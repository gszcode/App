import { Router } from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { validatorRole } from '../middlewares/validatorRole.js'
import {
  loginValidator,
  registerValidator
} from '../middlewares/validatorExpress.js'
import {
  infoUser,
  login,
  logout,
  register
} from '../controllers/userController.js'

const router = Router()

router.post('/register', registerValidator, register)
router.post('/login', loginValidator, login)
router.get('/logout', verifyToken, logout)

// Prueba
router.get('/info', verifyToken, validatorRole, infoUser)

export default router