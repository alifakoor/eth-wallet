// depencies
const express = require("express")
const cors = require("cors")

// consts
const path = __dirname + '/app/views/'
const PORT = process.env.PORT || 1414
const app = express()

// uses
app.use(express.json())
app.use(express.static(path))
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
    res.sendFile(path + "index.html")
})

// fly
app.listen(PORT, () => {
    console.log(`Server was ran on ${PORT}`)
})