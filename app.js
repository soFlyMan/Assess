var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var port = process.env.PORT || 3000
var app = express()
var db = require('./server/db')
var index = require('./routes/index')
var admin = require('./routes/admin')

//设置模版引擎
app.set('views', './views')
app.set('view engine','jade')
//对请求内容进行解析
//解析application/json

//解析application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
	secret: 'sessionsecret',
	resave: false,
	saveUninitialized: true
}))

app.use('/',index)
app.use('/admin',admin)
//引用静态文件
app.use('/static', express.static(__dirname + '/public'))


//监听端口
app.listen(port)
console.log('server start on '+port)

module.exports = app
