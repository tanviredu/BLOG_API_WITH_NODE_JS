const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    content:{
        type:String,
        require:true
    }
}, {
    timestamps:true
})
module.exports = mongoose.model('Posts',PostSchema);