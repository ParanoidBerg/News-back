const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const port = 4000

app.use(require('./components/routes/'))

mongoose
  .connect("mongodb+srv://Deni:2479@cluster0.elkeumb.mongodb.net/NewsProject")
  .then(() => console.log('Успешно соединилсь с MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером'))

app.listen(port, () => {
    console.log(`Сервер успешно запущен http://localhost:${port}`)
})