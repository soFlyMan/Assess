var express = require('express')
var router = express.Router()


var Klass = require('../models/klass')

router.get('/klass',function(req,res){
	console.log('get!!')
	Klass.fetch(function(err,Klass){
		if(err){
			console.log(err)
		}else{
			res.send(Klass)
		}
	})
})
router.post('/addklass',function(req,res){
	var _klass = req.body
	Klass.findOne({klassname: _klass.klassname},function(err,klass){
		if(err){
			console.log(err)
		}else if(klass){
			return res.send({status: 2})
		}else{
		var klass = new Klass(_klass)
		klass.save(function(err,klass){
			if(err){
				res.send({status: 2})
			}else{
				res.send({status: 1})
			}
			
			})
		}
	})
	
})
// router.post('/addklass',function(req,res){
// 	var _klass = req.body
// 	var klassname = _klass.klassname
// 	console.log(_klass)
// 	Klass.findOne({klassname: klassname},function(err,klass){
// 		if(err){
// 			console.log(err)
// 		}else if(klass){
// 			return res.send({status: 2})
// 		}else{
// 			var klass = new Klass(_klass)
// 			console.log(klass)
// 			klass.save(function(err){
// 				if(err){
// 					console.log(err)
// 				}else{
// 				res.send({status: 1})
// 			}
// 			})
// 		}
// 	})
// })

module.exports = router