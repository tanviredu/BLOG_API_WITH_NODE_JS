const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Post = require('../models/Post');
//const app = express();
const fetchoneapp = express.Router();
fetchoneapp.use(bodyParser.json());
fetchoneapp.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb://localhost:27017/test4'
const connect = mongoose.connect(url,(db)=>{
    console.log("Connected to the server");
});





fetchoneapp.get('/',(req,res)=>{
    // this send a get request
    res.sendFile(path.join(appRoot+'/view/searchpost.html'));
});

// you have to add async so one can wait so the other can fetch the data
fetchoneapp.post('/',async (req,res)=>{
    try{
    fusername = req.body.username;
    const posts  = await Post.find({username:fusername});
    
    res.json(posts);
    }catch(err){
        res.json(err);
    }
});


//  fetchoneapp.get('/',async (req,res)=>{
//     try{
//          const posts = await Post.find({username:fusername});
//             res.json(posts);
//     }catch (err) {
//         res.json(err);

//     }
//  });

// to find all the users

//for (var key in posts) { //obj is your data variable
//    console.log(key); //xxxx-x-xx-x-x-xxxx
//    console.log(posts[key].username); //the name for each
//}


module.exports = fetchoneapp;