var express = require('express');
var morgan = require('morgan');
var assert = require('assert');
var bodyParser = require('body-parser');

var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.set('port', (process.env.PORT || 3000));

app.get('/api', function (request, response) {
    response.json({ 'testKey': 'testVal' })
})

//For avoidong Heroku $PORT error
app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});