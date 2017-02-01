var express = require('express')
var router = express.Router()

var User = require('../models/users')
var Admin = require('../models/admin')

//页面

router.get('/',function(req,res){
	console.log("123123123")
	console.log(req.session.user)
	console.log(req.sessionID)
	res.sendfile('./index.html')
})
// router.get('/index.css',function(req,res){
// 	res.sendfile('./dist/index.css')
// })
// router.get('/index.js',function(req,res){
// 	res.sendfile('./dist/index.js')
// })
// router.get('/common.js',function(req,res){
// 	res.sendfile('./dist/common.js')
// })

router.get('/exam',function(req,res){
	User.fetch(function(err,users){
		if(err){
			console.log(err)
		}
		res.send(users[0])
	})
})

router.get('/nav.jpg',function(req,res){
	res.sendfile('./dist/fd501e6aa355a35843a6ae8b3585eec1.jpg')
})
router.get('/logo',function(req,res){
	res.sendfile('./dist/f3919c9c277024f91197317ae56e87d2.png')
})
// router.get('/favicon1',function(req,res){
// 	res.sendfile('./favicon.png')
// })

//user sign in
router.post('/signin',function(request,response){
	var _user = request.body
	var userid = _user.userid
	var password = _user.password

	User.findOne({userid: userid},function(err,user){
			if(err){
				console.log(err)
			}else if(!user){
				console.log('user is not exist !')
				response.send({status: 0})
			}else{
			user.comparePassword(password,function(err,isMatch){
				if(err){
					console.log(err)
				}else if(isMatch){
					console.log(user)
					request.session.user = {
						userid: 123,
						username: 'asd'
					}
					// request.session.userid = user.userid
					// request.session.username = user.username
					// request.session.save()
					// console.log('sesesese')
					console.log(request.session.user)
					// request.session.user = request.session
					// console.log(request.session.userid)
					console.log('Is matched!')
					return response.send({status: 1,userid: request.session.user.userid,username: request.session.user.username})
				}else{
					console.log('password is not matched')
					return response.send({status: 2})
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

router.get('/logStatus',function(req,res){
	if(req.session.user){
		res.send({userid: req.session.user.userid, username: req.session.user.username})
	}else{
		res.send({status: 0})
	}
})

router.get('/logout',function(req,res){
		// if(req.session){
		// req.session.destory(function(err){
		// 	if(err){
		// 		console.log(err)
		// 	}else{
		delete req.session.user
		res.send({status: 1})
	// 		}
	// 	})
	// }
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