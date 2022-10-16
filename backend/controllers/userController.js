import User from '../models/userModel.js'
import { generateToken } from '../utils/generateToken.js'

// Register user
export const register = async (req, res) => {
  const { name, email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (user) return res.json('El usuario ya existe')

    user = new User({ name, email, password })
    await user.save()

    generateToken(user.id, res)
  } catch (error) {
    return res.json({ message: error.message })
  }
}

// Login
export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) return res.json({ message: 'No existe el user' })

    const passwordMached = await user.comparePassword(password)

    if (!passwordMached) {
      return res.json({ message: 'Email o contraseña invalido' })
    }

    // Generate token
    generateToken(user.id, res)
  } catch (error) {
    return res.json({ message: error.message })
  }
}

// Logout user
export const logout = async (req, res) => {
  return res.clearCookie('token').json({
    success: true,
    message: 'Logout successfully'
  })
}

// Info user
export const infoUser = async (req, res) => {
  console.log(req.uid)
  const user = await User.findById(req.uid)

  res.json(user)
}
