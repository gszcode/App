import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const { token } = req.cookies

  try {
    if (!token) throw new Error('Token not exist')

    const { uid } = jwt.verify(token, process.env.JWT_SECRET)
    req.uid = uid

    next()
  } catch (error) {
    return res.status(404).json({ error: error.message })
  }
}
