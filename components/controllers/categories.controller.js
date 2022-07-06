const Category = require('../models/Categories.model')

module.exports.categoryController={
    createCat: async (req, res) =>{
        try{
         const data = await Category.create({
            category: req.body.category
         })
         res.json(data)
        }catch(err) {
            res.json(err.message)
        }
    },
    getCat: async (req, res) =>{
        try{
            const data = await Category.find()
            return res.json(data)
        }catch(err){
            res.json(err.message)
        }
    }
   
}