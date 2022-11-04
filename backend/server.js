import 'dotenv/config'
import './database.js'
import app from './app.js'

// Initialization
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} 🔥`)
})
