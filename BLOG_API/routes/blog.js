var express = require('express');
var router = express.Router();
// this is a sub app to blog all the function goes here
/*
    //title field
    // body field
    // date field
    // username field

*/

/* GET home page. */

// we have to send a get request like a html form to get the data they are provided
// then you have to take the post request with body parser as  json request
// we can send the htm response but we are useng the ejs so we are rendering
// the html using res.render();
router.get('/', function(req, res, next) {
    res.render('blog', { title: 'Express' });
});

module.exports = router;

// taking the post request

router.post('/',(req,res)=>{
    var username = req.body.username;
    var title = req.body.title;
    var content = req.body.content;
    console.log(username);
    consle.log(title);
    console.log(content);

});
