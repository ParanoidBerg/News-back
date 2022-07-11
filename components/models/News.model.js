const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    pic: String,
    title: String,
    text: String,
    categoriesId: {
        ref: "Category",
        type: mongoose.SchemaTypes.ObjectId
    },
    likes: Number
    
})

const News = mongoose.model('News', newsSchema)

module.exports = News