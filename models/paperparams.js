var mongoose = require('mongoose')
var PapaerParamsSchema = require('../schemas/paperparams')

var PaperParams = mongoose.model('PaperParams',PapaerParamsSchema)

// var paperparams = new PaperParams()

// paperparams.save(function(err){
// 	if(err){
// 		console.log(err)
// 	}
// 	console.log('123')
// })

module.exports = PaperParams