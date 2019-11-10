const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const blogContoller = require('./controller/blogController');
const bloginputController = require('./controller/bloginputController');
const fetchallController = require('./controller/fetchallController');
const fetchoneController = require('./controller/fetchoneController');

const port = 3000;
const app = express();
app.use(bodyParser.json());
global.appRoot = path.resolve(__dirname);

app.use('/',blogContoller);
// showing the route
app.use('/bloginput',bloginputController);
app.use('/fetchall',fetchallController);
app.use('/fetchone',fetchoneController);

/* load all the static(css,js) file recursively */

/* static css and js should be imported here other
* wise its hard to resolve path from a sub program
* */
app.use(express.static(__dirname+'/view'));


app.listen(port);

console.log("Start server in port",port);