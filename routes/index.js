var express = require('express')
var router = express.Router()
var User = require('../models/users')
var Admin = require('../models/admin')

//页面
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

//user sign up
router.post('/signup',function(req,res){
	var _user = req.body
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
//user sign in
router.post('/signin',function(req,res){
	var _user = req.body
	var username = _user.username
	var password = _user.password

	User.findOne({username: username},function(err,user){
			if(err){
				console.log(err)
			}
			if(!user){
				console.log('user name is not exist !')
				res.send({status: 0})
			}
			else{
			user.comparePassword(password,function(err,isMatch){
				if(err){
					console.log(err)
				}
				if(isMatch){
					// req.session.user = user
					console.log('Is matched!')
					res.send({status: 1})
				}else{
					console.log('password is not matched')
					res.send({status: 2})
				}
			})
		}
	})

})
//admin sign in
router.post('/adminsignin',function(req,res){
	var _admin = req.body
	var adminname = _admin.adminname
	var adminpassword = _admin.adminpassword
	Admin.findOne({adminname: adminname},function(err,admin){
		if(err){
			console.log(err)
		}if(!admin){
			console.log("Not The Administrator!")
			res.send({status:0})
		}else{
			admin.compareAdminPassword(adminpassword,function(err,isMatch){
				if(err){
					console.log(err)
				}if(isMatch){
					console.log('matched')
					res.send({status:1})
				}else{
					console.log("Password is error")
					res.send({status:2})
				}
			})
		}
	})

})

// 	//优先级
// 	// var _users = req.params.users
// 	// var _users = req.body.users
// 	// var _users = req.query.users

// })

//show user list
router.get('/userlist',function(req,res){
	User.fetch(function(err,users){
		if(err){
			console.log(err)
		}else{
			res.send(users)
		}
	})
})








module.exports = router