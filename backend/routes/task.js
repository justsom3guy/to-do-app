const router = require('express').Router()
const Tasks = require('../models/task.model')

router.route('/').get((req, res) => {
    Tasks.find()
        .then(task => {
            res.json(task)
        })
        .catch(err => {
            console.error(err)
            res.status(400).json({ error: `${err}` })
        })
})

router.route('/').post((req, res) => {
    const taskName = req.body.taskName
    const createdAt = Date.now()
    const status = req.body.status

    const newTask = new Tasks({
        taskName,
        createdAt,
        status,
    })

    newTask.save()
        .then(() => res.json({ message: 'Task added' }))
        .catch(err => {
            console.error(err)
            res.status(400).json({ error: `${err}` })
        })
})


router.route('/:id').delete((req, res) => {
    Tasks.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({ message: 'Task deleted' })
        })
        .catch(err => {
            console.error(err)
            res.status(400).json({ error: `${err}` })
        })
})

router.route('/:id/update').post((req, res) => {

    Tasks.findByIdAndUpdate(req.params.id, {
        taskName: req.body.taskName,
        status: req.body.status
    })
        .then(() => {
            res.json({ message: `Task updated` })
        })
        .catch(err => {
            console.error(err)
            res.status(400).json({ error: `${err}` })
        })
})

module.exports = router