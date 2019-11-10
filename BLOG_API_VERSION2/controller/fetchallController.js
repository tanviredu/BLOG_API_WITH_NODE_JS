const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Post = require('../models/Post');
//const app = express();

const url = 'mongodb://localhost:27017/test4'
const connect = mongoose.connect(url,(db)=>{
    console.log("Connected to the server");
});



const fetchallapp = express.Router();

fetchallapp.get('/',async (req,res)=>{
   try{
        const posts = await Post.find({});
        res.json(posts);
   }catch (err) {
       res.json(err);

   }
});


module.exports = fetchallapp;