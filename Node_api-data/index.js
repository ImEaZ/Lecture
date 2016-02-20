var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var data = require('./data.route.js')
app.use('/' , data)

var server = app.listen(3000 , function(){
		var host = server.address().address
		var port = server.address().port
		console.log('app listing :' , host , port)
})
