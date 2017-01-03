var mongoose = require('mongoose')
var ResultSchema = require('../schemas/results')

var Result = mongoose.model('Result',ResultSchema)


// for(var i=0;i<6;i++){
	var result = new Result({
		userid: 20130610040208,
		coursename: 'ReactJS',
		date: Date.now(),
		result: 88
	})

	result.save(function(err){
	if(err) console.log(err)
	})
// }
module.exports = Result