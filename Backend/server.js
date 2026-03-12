const express = require('express')
const dotenv = require('dotenv')
const getDB = require('./getDb')
const todoRoute = require('./Routes/todoRoute')
const cors = require('cors')

dotenv.config()

const port = process.env.PORT || 3000;
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const startServer = async () => {
    await getDB()

    app.use('/todos', todoRoute)

    app.listen(port, () => {
        console.log("app running on port", port);
    })
}

startServer()