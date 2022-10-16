import 'dotenv/config'
import './database.js'
import app from './app.js'

// Initialization
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} 🔥`)
})
