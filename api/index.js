const api = require('express').Router()

api.use('/tasks', require('./tasks'))

api.use((req, res, next) => {
  const err = new Error('API Route not found!')
  err.status = 404
  next(err)
})

module.exports = api
