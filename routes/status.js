var express = require('express')
var router = express.Router()

var User = require('../models/users')

//examStatus router
router.post('/:id',function(req,res){
	var id = req.params.id
	User.find({_id: id},function(err,user){
		if(err){
			console.log(err)
		}else{
			console.log(user)
			res.send({status: user[0].status})
		}
	})
})

module.exports = router