const express = require('express')
require("../DB/conn")
const routers = require("./routes/employee")

const app = express();
const port = process.env.port || 8000

app.use(express.json())
app.use(routers)

app.listen(port, () => {
    console.log(`server on ${port}`)
})