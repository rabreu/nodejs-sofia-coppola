const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const DB_URL = "mongodb://localhost:27017/reprograma"

const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    const connection = mongoose.connection
    connection.on("error", () => console.log("Erro ao se conectar com o MongoDB."))
    connection.once("open", () => console.log("Conectado."))
}

module.exports = { connect }