const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true },
    () => console.log('connected to db!')
)

const authRoute = require('./routes/auth')

app.use('/api/user', authRoute)

app.listen(3000, () => console.log('Server up and running'))