const News = require("../models/News.model");

module.exports.newsController = {
  postNews: async (req, res) => {
    try {
      const data = await News.create({
        pic: req.body.pic,
        title: req.body.title,
        text: req.body.text,
        categoriesId: req.body.categoriesId,
        likes: req.body.likes
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
  delNews: async (req, res) =>{
    try{
      const data = await News.findByIdAndDelete(req.params.id)
      return res.json('Новость удалена')
    }catch (err) {
      return res.status(401).json(`Ошибка: ${err.message}`);
    }
  },
  patchNews: async (req, res) =>{
    try{
      const data = await News.findByIdAndUpdate(req.params.id, {
        likes: req.body.likes
      })
      return res.json(data)
    }catch (err) {
      return res.status(401).json(`Ошибка: ${err.message}`);
    }
  }
};
