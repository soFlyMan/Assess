var express = require('express')
var router = express.Router()

var User = require('../models/users')


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