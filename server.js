const express = require('express')
const colors = require('colors')
const cors = require('cors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema.js')
const connectDB = require('./config/db.js')
require('dotenv').config()


const app = express()

// Connect to database
connectDB()

app.use(cors())

const port = process.env.PORT || 5000

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
  })
)

app.listen(port, console.log(`Server running on port ${port}`.rainbow))