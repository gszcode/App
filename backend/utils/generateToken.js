import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export const generateToken = async (uid, res) => {
  const expiresIn = process.env.JWT_EXPIRE
  const user = await User.findById(uid, { password: 0 })

  const token = jwt.sign({ uid }, process.env.JWT_SECRET, {
    expiresIn
  })

  // Options cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  }

  return res.status(200).cookie('token', token, options).json({
    success: true,
    token,
    user
  })
}
