var express = require('express')
var router = express.Router()

var Result = require('../models/results')
var Param = require('../models/params')

router.post('/result',function(req,res){
	var userid = req.body.userid
	Result.find({userid: userid},function(err,results){
		if(err){
			console.log(err)
		}else{
			res.send(results)
		}
	})
})


router.get('/params',function(req,res){
	Param.find({},function(err,params){
		if(err){
			console.log(err)
		}else{
			res.send(params[0])
		}
	})
})














module.exports = router