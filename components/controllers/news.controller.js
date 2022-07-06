const News = require("../models/News.model");

module.exports.newsController = {
  postNews: async (req, res) => {
    try {
      const data = await News.create({
        title: req.body.title,
        text: req.body.text,
        categoriesId: req.body.categoriesId,
      });
      res.json(data);
    } catch (err) {
      return res.status(401).json(`Ошибка: ${err.message}`);
    }
  },
  getNews: async (req, res) => {
    try {
      const data = await News.find();
      return res.json(data);
    } catch (err) {
      return res.status(401).json(`Ошибка: ${err.message}`);
    }
  },
  getNewsByCat: async (req, res) => {
    try {
      const data = await News.find({ categoriesId: req.params.id });
      return res.json(data);
    } catch (err) {
      return res.status(401).json(`Ошибка: ${err.message}`);
    }
  },
};
