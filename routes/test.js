var express = require('express')
var router = express.Router()

var Test = require('../models/results')

router.post('/result',function(req,res){
	var userid = req.body.userid
	Test.find({userid: userid},function(err,results){
		if(err){
			console.log(err)
		}else{
			res.send(results)
		}
	})
})
















module.exports = router