var express = require('express');
var path = require('path');
var app = express();
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
// mongoose.connect('mongodb://localhost/quoting_dojo');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './static'));
app.get('/', function(req, res) {
	res.render('index');
})

app.listen(8000, function(){
	console.log('listening on port 8000');
})