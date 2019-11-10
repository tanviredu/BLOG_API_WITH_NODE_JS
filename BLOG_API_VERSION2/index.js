const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const blogContoller = require('./controller/blogController');
const port = 3000;
const app = express();
app.use(bodyParser.json());
/* load all the static file recursively */
app.use(express.static(__dirname+'/view'));

/* show the index file */
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/view/index.html'));
});





app.listen(port);

console.log("Start server in port",port);