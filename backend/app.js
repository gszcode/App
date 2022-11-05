import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/userRoute.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

// Middlewares
const whiteList = [
  process.env.ORIGIN1,
  'http://localhost:3000',
  'http://127.0.0.1:3000'
]
express.defaultURL = process.env.ORIGIN1 || 'http://localhost:3000'

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || whiteList.includes(origin)) {
        return callback(null, origin)
      }
      return callback('Error de CORS origin: ' + origin + ' No autorizado!')
    },
    credentials: true
  })
)

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

// Routes
app.use('/api/v1/auth', userRoutes)

export default app
