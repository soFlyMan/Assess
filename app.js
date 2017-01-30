var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var mongoose = require('mongoose')
var mongoStore = require('connect-mongo')(session)
// var RedisStore = require('connect-redis')(session)
var favicon = require('serve-favicon')

var port = process.env.PORT || 3000
var app = express()

// var options = {
//      "host": "127.0.0.1",
//      "port": "3000",
//      "ttl": 60 * 60 * 24 * 30,   //Session的有效期为30天
// };
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


app.use(favicon(__dirname+'/favicon.ico'))

//对请求内容进行解析
//解析application/json
//解析application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({

  secret: 'imooc',

  store: new mongoStore({

    url: 'mongodb://localhost/Assess',

    collection: 'sessions',

  }),

  resave: false,

  saveUninitialized: true

}))
// app.use(session({
// 	// store: new RedisStore(options),
// 	store: new mongoStore({
// 		url: 'mongodb://localhost/Assess',
// 		collection: 'sessions'
// 	}),
// 	secret: 'crackalackin',
//     resave: false,
//     saveUninitialized: true,
//     cookie : { secure : false, maxAge : (4 * 60 * 60 * 1000) }, // 4 hours
// }))

app.use('/',index)
app.use('/admin',admin)
app.use('/exam',exam)
app.use('/course',course)
app.use('/item',item)
app.use('/user',user)
//引用静态文件
app.use(express.static(path.join(__dirname, 'dist')));


// app.get('/logStatus',function(req,res){
// 			console.log(req.session.userid)
// 			console.log(req.session.username)
// 			if(req.session){
// 				res.send({userid: req.session.userid,username: req.session.username})
// 			}else{
// 			res.send({status: 0})
// 	}});


//监听端口
app.listen(port)
console.log('server start on '+port)

module.exports = app
