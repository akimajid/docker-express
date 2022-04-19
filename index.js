const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const PORT = 2000

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Docker express API</h1>")
})

app.listen(PORT, () => {
    console.log("Listening in port", PORT)
})