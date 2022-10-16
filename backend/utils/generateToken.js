import jwt from 'jsonwebtoken'

export const generateToken = (uid, res) => {
  const expiresIn = process.env.JWT_EXPIRE

  const token = jwt.sign({ uid }, process.env.JWT_SECRET, {
    expiresIn
  })

  // Options cookit
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  }

  return res.status(200).cookie('token', token, options).json({
    success: true,
    token
  })
}
