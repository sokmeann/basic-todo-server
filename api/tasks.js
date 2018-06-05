const router = require('express').Router()
const { Task } = require('../db')

router.get('/all', (req, res, next) => {
  Task.findAll()
    .then(response => {
      const tasks = response.map(task => task.dataValues)
      res.status(200).json(tasks)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Task.create(req.body)
    .then(response => {
      const newTask = response.dataValues
      res.status(201).json(newTask)
    })
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Task.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
