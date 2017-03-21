var express = require('express')
var router = express.Router()
var bcrypt = require('bcrypt')//加盐
var SALT_WORK_FACTOR = 10 //计算强度,计算密码所需要的资源和时间

var User = require('../models/users')

//user sign up
router.post('/signup',function(req,res){
	var _user = req.body
	User.findOne({userid: _user.userid},function(err,user){
		if(err){
			console.log(err)
		}else if(user){
			return res.send({status:0})
		}else{
		var user = new User(_user)
		user.save(function(err,user){
			if(err) console.log(err)
				res.send({status:1})
			})
		}
	})
	
})

router.post('/result',function(req,res){
	var id = req.body.id
	var result = req.body.result
	var stuExampaper = req.body.stuExampaper
	console.log(stuExampaper)
	console.log(id,result)
	User.findOneAndUpdate({_id: id},{
		$set: {
			exampaper: stuExampaper,
			status: false
		}
	},function(err,user){
		if(err){
			console.log(err)
		}else{
			console.log(user)
			res.send({status: 1})
		}
	})
})

router.post('/modi',function(req,res){
	var id = req.body.id
	var userid = req.body.userid
	var username = req.body.username
	var klass = req.body.klass
	User.findOneAndUpdate({_id: id},{
		$set: {
			userid: userid,
			username: username,
			class: klass
		}
	},function(err,user){
		if(err){
			console.log(err)
		}else{
			console.log(user)
			res.send({status: 1})
		}
	})
})

router.post('/changePassword',function(req,res){
	var id = req.body.id
	var password = req.body.oripassword
	var cpassword = req.body.cpassword
	User.findOne({_id: id},function(err,user){
		if(err){
			console.log(err)
			res.send({status: 2})
		}else{
			user.comparePassword(password,function(err,isMatched){
				if(err){
					console.log(err)
					res.send({status: 2})
				}else if(isMatched){
					bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
				 	if(err){
				 		console.log(err)
						res.send({status: 2})
				 	}else{
				 		bcrypt.hash(cpassword,salt,function(err,hash){
				 			if(err){
			 				    console.log(err)
								res.send({status: 2})
				 			}else{
								cpassword = hash
								user.update({password: cpassword},function(err){
									if(err){
										console.log(err)
										res.send({status: 2})
									}else{
										res.send({status: 1})
									}
								})
				 			}

				 		})
				 	}
				 })
				}else{
					res.send({status: 0})
				}
			})
		}
		
	})
})

router.post('/:id',function(req,res){
	var _id = req.params.id
	User.find({_id: _id},function(err,user){
		if(err){
			console.log(err)
		}else{
			res.send(user)
		}
	})
})




module.exports = router