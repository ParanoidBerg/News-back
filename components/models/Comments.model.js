const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    user: {
        ref: 'User',
        type: mongoose.SchemaTypes.ObjectId
    },
    commentText: String,
    newsId: {
        ref: 'News',
        type: mongoose.SchemaTypes.ObjectId
    }
    
    
    
})

const Comments = mongoose.model('Comments', commentSchema)

module.exports = Comments