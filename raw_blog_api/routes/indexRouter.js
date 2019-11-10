
const express = require('express');
const bodyParser = require('body-parser');
const path =require('path');
const mongoose = require('mongoose');
const Post = require('../models/Post');
const indexapp = express.Router(); 
indexapp.use(bodyParser.json());


// connect to the server

const url = 'mongodb://localhost:27017/test3';
const connect = mongoose.connect(url,(db)=>{
    console.log("Connected to database");
});



// VVI this line is fo getting the post request
// from the form
indexapp.use(bodyParser.urlencoded({ extended: true })); 


// this is a get request for sending rthe field
indexapp.get('/',(req,res)=>{
    // take response
    // we send the html as a response
    res.sendFile(path.join(__dirname+'/blog.html'));

})

indexapp.post('/',(req,res)=>{
    // var username = req.body.username;
    // var email = req.body.email;
    // var content = req.body.content;

    // // fetched the data successfully
    // // send a rest api

    // // before sending the json response we need to save to a database
    // // mongo db
    // data = {
    //     "username" : username,
    //     "email" : email,
    //     "content" : content
    // }
    // res.send(data);

    // create a post object 

    const post = new Post({
        username:req.body.username,
        email:req.body.email,
        content:req.body.content   
     });
    

     post.save().then(data=>{
        res.json(data); // saving in the dataabse then send the API to whom is requesting
    }).catch(err=>{
        res.json({message:err})
    });

});


indexapp.get('/getall',async (req,res)=>{
    try{
        const posts = await Post.find({}); // this will find all the post
        res.json(posts);
    }catch(err){
        res.json({message:err});
}
});




module.exports = indexapp;