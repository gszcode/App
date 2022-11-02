import jwt from 'jsonwebtoken'
import { tokenVerificationErrors } from '../utils/generateToken.js'

export const verifyToken = (req, res, next) => {
  // const { token } = req.cookies
  const token = req.headers.authorization.split(' ')[1]

  try {
    if (!token) throw new Error('Please Login to access this resource')

    const { uid } = jwt.verify(token, process.env.JWT_SECRET)
    req.uid = uid

    next()
  } catch (error) {
    return res
      .status(404)
      .json({ error: tokenVerificationErrors[error.message] })
  }
}
