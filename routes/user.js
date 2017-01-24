var express = require('express')
var router = express.Router()

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