const Comments = require("../models/Comments.model");

module.exports.commentsController = {
  postComment: async (req, res) => {
    try {
      const data = await Comments.create({
        user: req.user.id,
        commentText: req.body.commentText,
        newsId: req.body.newsId
      });
      res.json(data);
    } catch (err) {
      return res.status(401).json(`Ошибка: ${err.message}`);
    }
  },
  getCommentsByNews: async (req, res) => {
    try {
      const data = await Comments.find({ newsId: req.params.id });
      return res.json(data);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  getComments: async (req, res) => {
    try {
      const data = await Comments.find();
      return res.json(data);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  delComments: async (req, res) =>{
    try{
        const comment = await Comments.findById(req.params.id)
        if(comment.user.toString() === req.user.id || req.user.admin === 'admin') {
            await comment.remove()
            return res.json('Комментарий удален')
        }
        return res.status(401).json({ error: "У вас нет доступа" })
    }catch (err) {
      return res.status(401).json(`Ошибка: ${err.message}`);
    }
  }
};
