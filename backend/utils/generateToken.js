import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export const generateToken = async (uid, res) => {
  const expiresIn = process.env.JWT_EXPIRE
  const userAvatar = await User.findById(uid, { avatar: 1 })

  const token = jwt.sign({ uid }, process.env.JWT_SECRET, {
    expiresIn
  })

  // Options cookie
  const options = {
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    httpOnly: false,
    secure: false
  }

  res.status(201).cookie('token', token, options).json({
    success: true,
    token,
    userAvatar
  })
}

export const tokenVerificationErrors = {
  'invalid signature': 'The JWT signature is not valid',
  'jwt expired': 'Expired JWT',
  'invalid token': 'Invalid token',
  'No Bearer': 'Use bearer format',
  'jwt malformed': 'JWT invalid format'
}
