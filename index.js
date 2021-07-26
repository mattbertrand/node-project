const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mattbertrand:mattbertrand@cluster0.unqt7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useUnifiedTopology: true },
() => console.log('connected to db!')
)

const authRoute = require('./routes/auth')

app.use('/api/user', authRoute)

app.listen(3000, () => console.log('Server up and running'))