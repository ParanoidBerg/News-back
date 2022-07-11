const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())

app.use(express.json())
app.use(require('./components/routes/'))
app.use('/static', express.static('public'))

app.use('/components/assets', express.static(__dirname + '/components' + '/assets'))

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log('Успешно соединилсь с MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером'))

app.listen(4000, () => {
    console.log(`Сервер успешно запущен http://localhost:${process.env.PORT}`)
})