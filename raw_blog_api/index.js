
// modules import
const express = require('express');
const http = require('http');
const bodyparser = require('body-parser');
const path =require('path');
const indexRouter = require('./routes/indexRouter');


//diclare the hostname and port
const hostname = "localhost";
const port = 3000;

// init the express
const app = express()

//use the body parser as a json parser
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    // take response
    // we send the html as a response
    res.sendFile(path.join(__dirname+'/login.html'));

})

// mounting endpoint
app.use('/blog',indexRouter);


const server = http.createServer(app);
// make the server to run
server.listen(port,hostname,()=>{
    console.log(`Server running in http://${hostname}:${port}`);
});
