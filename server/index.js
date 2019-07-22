require("dotenv").config()
const express = require("express")
const massive = require("massive")
const {getVehicles, getVehicle} = require("./contoller")

const app = express()

const {CONNECTION_STRING, SERVER_PORT} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("database connected")
})
.catch(error => console.log(error))

const PORT = SERVER_PORT

app.get("/api/vehicles", getVehicles)
app.get("/api/vehicles/:id", getVehicle)



app.listen(PORT, () => {
    console.log("server is listening")
})
