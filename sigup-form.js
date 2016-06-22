var app 	= require('express')();
var logger 	= require('morgan');
var bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route to handle / which for this exercise sends back a form in text form
app.get('/', function(req, res) {
	res.send("<form method='post' action='/formsubmit'><input name='email' type='email'><input type='submit'></form>")
});

// for the route /formsubmit which is called when the user clicks the form submit button, redirect to /success 
// a POST-REDIRECT-GET design
app.post('/formsubmit', function(req, res) {
	console.log(req.body);
	res.redirect('/success');
});

app.get('/success', function(req, res) {
	res.send("SUCCESS");
});

// have our server start to listen
app.listen(process.env.PORT || 8000);