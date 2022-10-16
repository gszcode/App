import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/userRoute.js'
const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

// Routes
app.use('/api/v1/auth', userRoutes)

export default app
