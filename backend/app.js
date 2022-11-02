import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/userRoute.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// Routes
app.use('/api/v1/auth', userRoutes)

export default app
