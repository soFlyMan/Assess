var express = require('express')
var router = express.Router()


var Klass = require('../models/klass')

router.get('/Klass',function(req,res){
	console.log('get!!')
	Klass.fetch(function(err,Klass){
		if(err){
			console.log(err)
		}else{
			res.send(Klass)
		}
	})
})

module.exports = router