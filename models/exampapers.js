var mongoose = require('mongoose')

var ExampapSchema = require('../schemas/exampapers')
var Exampap = mongoose.model('Exampap',ExampapSchema)

var exampap = new Exampap({
	radio: [{
		body: '这是一道选择题！',
		options: 'A. 1    B. 2    C. 3    D. 4',
		answer: 'A'
	},
	{
		body: '这又是一道选择题！',
		options: 'A. 1    B. 2    C. 3    D. 4',
		answer: 'B'
	},
	{
		body: '这还是一道选择题！',
		options: 'A. 1    B. 2    C. 3    D. 4',
		answer: 'C'
	}],
	multi: [{
		body: '这是一道多项选择题！',
		options: 'A. 1    B. 2    C. 3    D. 4',
		answer: 'A C'
	},
	{
		body: '这又是一道多项选择题！',
		options: 'A. 1    B. 2    C. 3    D. 4',
		answer: 'B D'
	},
	{
		body: '这还是一道多项选择题！',
		options: 'A. 1    B. 2    C. 3    D. 4',
		answer: 'C D'
	}],
})

exampap.save(function(err){
	console.log(err)
})
module.exports = Exampap