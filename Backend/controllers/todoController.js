const mongoose = require('mongoose')
const todos = require('../Models/todoModel')


// list todos
const getTodos = async (req, res) => {
    try {
        const items = await todos.find({}).sort({ createdAt: -1 })
        if (items.length === 0) {
            return res.status(404).json({ message: "No items found!" })
        }
        res.status(200).json(items)

    }
    catch (err) {
        res.status(500).json({ error: err.message })

    }
}


// add task
const setTodo = async (req, res) => {
    const { task } = req.body
    const emptyFields = []

    if (!task) emptyFields.push('task')

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Fill the task field!" })
    }

    try {
        const item = await todos.create({
            task
        })
        res.status(201).json({ message: "Items created!", data: item })
    }
    catch (err) {
        res.status(500).json({ error: err.message })

    }
}


// delete task
const deleteTodo = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: "Invalid id!" })
        }
        const item = await todos.findByIdAndDelete(id)
        if (!item) {
            return res.status(404).json({ message: "No item found!" })
        }
        res.status(200).json({ message: "Items deleted!", data: item })
    }
    catch (err) {
        res.status(500).json({ error: err.message })

    }
}

module.exports = { getTodos, setTodo, deleteTodo }