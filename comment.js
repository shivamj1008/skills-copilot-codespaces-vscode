//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//set port
var port = process.env.PORT || 8080;
//use body parser to get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//create router
var router = express.Router();
//middleware to use for all requests
router.use(function(req, res, next){
	//do logging
	console.log('Something is happening.');
	next(); //make sure we go to the next routes and don't stop here
});
//test route to make sure everything is working
router.get('/', function(req, res){
	res.json({message: 'hooray! welcome to our api!'});
});
//more routes for our API will happen here
//register our routes
//all of our routes will be prefixed with /api
app.use('/api', router);
//start server
app.listen(port);
console.log('Magic happens on port ' + port);