import mongoose from 'mongoose'
const URI_MONGODB = process.env.URI_MONGODB

mongoose
  .connect(URI_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((data) =>
    console.log(`Database connected in: ${data.connection.host} 👌`)
  )
  .catch((error) => console.log(`An error occurred: ${error}`))
