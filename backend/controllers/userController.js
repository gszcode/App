import User from '../models/userModel.js'
import { generateToken } from '../utils/generateToken.js'

// Register user
export const register = async (req, res) => {
  const { name, email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (user) throw new Error('User already exist')

    user = new User({ name, email, password })
    await user.save()

    generateToken(user.id, res)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

// Login
export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) throw new Error('User does not exist')

    const passwordMached = await user.comparePassword(password)

    if (!passwordMached) throw new Error('Invalid Email or Password')

    // Generate token
    generateToken(user.id, res)
  } catch (error) {
    return res.status(404).json({ message: error.message })
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
