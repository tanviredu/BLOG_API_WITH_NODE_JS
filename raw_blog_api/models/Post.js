const mongoose = require('mongoose');

//we create the database schema here
// yes there is scema for nosql too

const PostSchema = mongoose.Schema(
  {
      username: {
          type:String,
          require:true
      },
      email: {
          type:String,
          require:true
      },
      content:{
          type:String,
          require:true
      }
    },
    
    
    {
        timestamps:true
    });

    // this is the rule to make schema

module.exports = mongoose.model('Posts',PostSchema);
// this will save as a Post schema in the Mlab database