import 'dotenv/config'
import './backend/database.js'
import app from './backend/app.js'

// Initialization
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} 🔥`)
})
