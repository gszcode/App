import User from '../models/userModel.js'

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
