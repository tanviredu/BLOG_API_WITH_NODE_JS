const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json());



const blogapp = express.Router();


/* load all the static file recursively */
//blogapp.use(express.static()));

/* show the index file */
blogapp.get('/',(req,res)=>{
    res.sendFile(path.join(appRoot+'/view/index.html'));
});


module.exports = blogapp;