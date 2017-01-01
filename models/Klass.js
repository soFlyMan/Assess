var mongoose = require('mongoose')
var KlassSchema = require('../schemas/klass')

var Klass =mongoose.model('Klass',KlassSchema)

var kls =new Klass({
	klassname: 'ggddg',
	password: '213'
})

kls.save(function(err){
	if(err) console.log(err)
})

// Klass.fetch(function(err,klass){
// 	if(err){
// 		console.log(err)
// 	}
// 		console.log(klass)
// })

module.exports = Klass
