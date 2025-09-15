const express = require('express')
require('dotenv').config()
const databaseConnection = require('./config/database')
const PORT = process.env.PORT || 9099

const server = express()
server.use(express.json())

databaseConnection()

server.listen(PORT, () => {
    console.log(`Server up and running on port: ${PORT}`)
})