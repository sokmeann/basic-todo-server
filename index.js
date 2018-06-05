/* eslint-disable no-console */
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000

const { db } = require('./db')

const app = express()

db.sync()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())

app.use('/api', require('./api'))

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))
