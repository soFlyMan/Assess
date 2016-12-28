var express = require('express')
var router = express.Router()
var User = require('../models/users')


router.get('/',function(req,res){
	console.log("session!!!!!!!!!!!")
	console.log(req.session.user)
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
		console.log("test session")
		console.log(req.session.user)
		console.log(users)
		res.send(users[0])
	})
})

router.get('/nav.jpg',function(req,res){
	res.sendfile('./dist/fd501e6aa355a35843a6ae8b3585eec1.jpg')
})
//sign up
router.post('/signup',function(req,res){
	var _user = req.body
	console.log(_user)
	User.findOne({username: _user.username},function(err,user){
		if(err){
			console.log(err)
		}else if(user){
			return res.redirect('/')
		}
		var user = new User(_user)
		user.save(function(err,user){
			if(err) console.log(err)
				res.send({a:1})

	})
	})
	
})

router.post('/signin',function(req,res){
	var _user = req.body.user
	var username = _user.username
	var password = _user.password

	User.findOne({username: username},function(err,user){
			if(err){
				console.log(err)
			}
			if(!user){
				return res.redirect('./')
			}
			else{
			user.comparePassword(password,function(err,isMatch){
				if(err){
					console.log(err)
				}
				if(isMatch){
					req.session.user = user
					console.log('password is matched!')
					return res.redirect('./')
				}else{
					console.log('password is not matched')
				}
			})
		}
	})

})
// router.post('/signup',function(req,res){
// 	// var _users = req.body.users
// 	var _users = req.body
// 	console.log("123")
// 	console.log(_users)
// 	var user = new User(_users)

// 	user.save(function(err,user){
// 		if(err) console.log(err)
// 			console.log(user)
// 		res.send({a:1})
// 	})
// 	//优先级
// 	// var _users = req.params.users
// 	// var _users = req.body.users
// 	// var _users = req.query.users

// })

module.exports = router