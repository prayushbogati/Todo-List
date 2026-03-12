const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: String
},
    {
        timestamps: true
    })

const todoModel = mongoose.model("Todo", todoSchema)

module.exports = todoModel