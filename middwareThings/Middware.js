var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  console.log(req.requestTime );
  next()
}
var requestUser = function (req, res, next) {
  console.log('welcome');
  next()
}

app.use(requestTime)
app.get('/', function (req, res) {
  console.log('//welcome');
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})
app.use(requestUser)
app.listen(3000)
