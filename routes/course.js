var express = require('express')
var router = express.Router()

var Course = require('../models/courses')
var Exampap = require('../models/exampapers')

router.post('/characters',function(req,res){
	var coursename = req.body.coursename
	Course.findOne({coursename: coursename},function(err,course){
		if(err){
			console.log(err)
		}else{
			console.log(course)
			res.send(course)
		}
	})
})

module.exports = router