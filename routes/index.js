var express = require('express')
var router = express.Router()
var User = require('../models/users')

router.get('/',function(req,res){
	res.sendfile('./index.html')
})
router.get('/index.css',function(req,res){
	res.sendfile('./dist/index.css')
})
router.get('/index.js',function(req,res){
	res.sendfile('./dist/index.js')
})
router.get('/common.js',function(req,res){
	res.sendfile('./dist/common.js')
})

router.get('/test',function(req,res){
	User.fetch(function(err,users){
		if(err){
			console.log(err)
		}
		console.log(users)
		res.send(users[0])
	})
})

router.get('/nav.jpg',function(req,res){
	res.sendfile('./dist/fd501e6aa355a35843a6ae8b3585eec1.jpg')
})

module.exports = router