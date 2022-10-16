import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  console.log(req.cookies)
  const { token } = req.cookies

  if (!token) {
    return res.json({ message: 'No existe el token' })
  }

  const { uid } = jwt.verify(token, process.env.JWT_SECRET)
  req.uid = uid

  next()
}
