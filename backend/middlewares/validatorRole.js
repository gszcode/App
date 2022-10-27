import User from '../models/userModel.js'

export const validatorRole = async (req, res, next) => {
  try {
    const user = await User.findById(req.uid)

    if (user.role !== 'admin') throw new Error('Not authorized')

    next()
  } catch (error) {
    return res.status(401).json({ error: error.message })
  }
}
