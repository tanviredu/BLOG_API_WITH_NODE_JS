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


router.get('/', function(req, res, next) {
    res.render('blog.html', { title: 'Express' });
});

module.exports = router;
