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

    // Generate token
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
export const userProfile = async (req, res) => {
  try {
    const user = await User.findById(req.uid, { password: 0 })
    console.log({ user })

    return res.status(200).json({
      success: true,
      user
    })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

// Get all users (admin)
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({})

    if (!users) throw new Error('There are not Users')

    return res.status(200).json({
      success: true,
      users
    })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
