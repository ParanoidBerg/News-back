const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const app = express();
app.use(express.json());
app.use(
  "/components/assets",
  express.static(path.resolve(__dirname + '/components' + '/assets'))
);
app.use(cors());

app.use(require("./components/routes/"));

console.log(__dirname);



mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Успешно соединилсь с MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером"));

app.listen(4000, () => {
  console.log(`Сервер успешно запущен http://localhost:${process.env.PORT}`);
});
