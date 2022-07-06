const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    category: String
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category 