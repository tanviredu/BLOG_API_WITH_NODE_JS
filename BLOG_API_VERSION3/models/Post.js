const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	username:{
		type:String,
		require:true
	},
    content:{
        type:String,
        require:true
    }
}, {
    timestamps:true
})
module.exports = mongoose.model('Posts',PostSchema);