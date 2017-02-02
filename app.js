var express = require('express')
var jade = require('jade')
var mongoose = require('mongoose')
// var cookieParser = require('cookie-parser')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var favicon = require('serve-favicon')

//静态资源请求路径
var path = require('path')
var bodyParser = require('body-parser')

var app = express()
var port = process.env.PORT || 3000

var db = require('./server/db')
var index = require('./routes/index')
var admin = require('./routes/admin')
var exam = require('./routes/exam')
var course = require('./routes/course')
var item = require('./routes/item')
var user = require('./routes/user')

//设置模版引擎

app.set('views', './views')
app.set('view engine','jade')

//引用静态文件
app.use(express.static(path.join(__dirname, 'dist')))
app.use(favicon(__dirname+'/favicon.ico'))

//对请求内容进行解析
//解析application/json
//解析application/x-www-form-urlencoded
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser())

app.use(session({
  secret: 'heiheihei',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, maxAge : (4 * 60 * 60 * 1000) },
  store: new MongoStore({
    url: 'mongodb://localhost/Assess',
    collection: 'mysession'
  })
}))

app.use('/',index)
app.use('/admin',admin)
app.use('/exam',exam)
app.use('/course',course)
app.use('/item',item)
app.use('/user',user)



//监听端口
app.listen(port)
console.log('server start on '+port)

module.exports = app
