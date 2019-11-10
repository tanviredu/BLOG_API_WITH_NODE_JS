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



const bloginputapp = express.Router();
bloginputapp.use(bodyParser.json());
bloginputapp.use(bodyParser.urlencoded({ extended: true }));


/* load all the static file recursively */
//blogapp.use(express.static()));

/* show the index file */
bloginputapp.get('/',(req,res)=>{
    // this send a get request
    res.sendFile(path.join(appRoot+'/view/create_post.html'));
});

bloginputapp.post('/',(req,res)=>{
    // take the data from post request
    const post = new Post({
        username:req.body.username,
        content:req.body.content
    });
    // database insert goes here
    post.save().then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    });



});


module.exports = bloginputapp;