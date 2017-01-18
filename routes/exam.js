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

router.post('/modiParams',function(req,res){
	var id = req.body._id
	var date = req.body.date
	var time = req.body.time
	var minute = req.body.minute
	var limit = req.body.limit
	var papertype = req.body.papertype
	var refer = req.body.refer
	Param.findOneAndUpdate({_id: id},{$set:{
		date: date,
		time: time,
		minute: minute,
		limit: limit,
		papertype: papertype,
		refer: refer
	}},function(err,doc){
		if(err){
			console.log(err)
		}else{
			Param.findOne({_id: id},function(err,params){
				if(err){
					console.log(err)
				}else{
					res.send(params)
				}
	})
		}
	})
})













module.exports = router