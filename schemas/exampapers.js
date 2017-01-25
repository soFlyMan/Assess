var mongoose = require('mongoose')

var ExampapSchema = new mongoose.Schema({
	radio: [{
		_id: String,
		body: String,
		options: String,
		answer: String,
		_v: Number
	}],
	multi: [{
		_id: String,
		body: String,
		options: String,
		answers: String,
		_v: Number
	}],
	judge:[{
		_id: String,
		body: String,
		answer: Boolean,
		_v: Number
	}],
	fillblank: [{
		_id: String,
		body: String,
		answer: String,
		_v: Number
	}],
	programming: [{
		_id: String,
		body: String,
		answer: String,
		_v: Number
	}],
	correct: [{
		_id: String,
		body: String,
		answer: String,
		_v: Number
	}],
	createAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = ExampapSchema