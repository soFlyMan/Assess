var mongoose = require('mongoose')

var ExampapSchema = new mongoose.Schema({
	radio: [{
		body: String,
		options: String,
		answer: String
	}],
	multi: [{
		body: String,
		options: String,
		answers: String
	}],
	judge:[{
		body: String,
		answer: Boolean
	}],
	fillblank: [{
		body: String,
		answer: String
	}],
	programming: [{
		body: String,
		answer: String
	}],
	correct: [{
		body: String,
		answer: String
	}],
	createAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = ExampapSchema