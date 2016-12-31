var mongoose = require('mongoose')
var KlassSchema = require('../schemas/klass')

var Klass =mongoose.model('Klass',KlassSchema)

var kls =new Klass({
	klassname: '13计算机一班'
})


Klass.fetch(function(err,klass){
	if(err){
		console.log(err)
	}
		console.log(klass)
})

module.exports = Klass
