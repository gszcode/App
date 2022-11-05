import { Router } from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { validatorRole } from '../middlewares/validatorRole.js'
import {
  loginValidator,
  registerValidator
} from '../middlewares/validatorExpress.js'
import {
  userProfile,
  login,
  logout,
  register,
  getAllUser
} from '../controllers/userController.js'

const router = Router()

// register - login - logout
router.post('/register', registerValidator, register)
router.post('/login', loginValidator, login)
router.get('/logout', verifyToken, logout)

// profile
router.get('/profile', verifyToken, userProfile)

// get users
router.get('/admin/users', verifyToken, validatorRole, getAllUser)

router.get('/hola', (req, res) => {
  res.send('holis')
})

export default router
