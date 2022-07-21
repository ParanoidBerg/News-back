const News = require("../models/News.model");

module.exports.newsController = {
  postNews: async (req, res) => {
    try {
      const { title, text, categoriesId } = req.body;

      const news = await News.create({
        pic: req.file.path,
        title,
        text,
        categoriesId,
      });
      return res.json(news);
    } catch (err) {
      return res.status(401).json({error: `Ошибка: ${err.message}`});
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
  delNews: async (req, res) => {
    try {
      const data = await News.findByIdAndDelete(req.params.id);
      return res.json("Новость удалена");
    } catch (err) {
      return res.status(401).json(`Ошибка: ${err.message}`);
    }
  },
  patchNews: async (req, res) => {
    try {
      const data = await News.findByIdAndUpdate(req.params.id, {
        likes: req.body.likes,
      });
      return res.json(data);
    } catch (err) {
      return res.status(401).json(`Ошибка: ${err.message}`);
    }
  },
};
