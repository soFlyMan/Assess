var mongoose = require('mongoose')

var ExampapSchema = new mongoose.Schema({
	date: String,
	radio: [{
		_id: String,
		body: String,
		options: String,
		answer: String,
		_v: Number
			}],
	radioScore: Number,
	multi: [{
		_id: String,
		body: String,
		options: String,
		answers: String,
		_v: Number
			}],
	multiScore: Number,
	judge:[{
		_id: String,
		body: String,
		answer: Boolean,
		_v: Number
			}],
	judgeScore: Number,
	fillblank: [{
		_id: String,
		body: String,
		answer: String,
		_v: Number
			}],
	fillblankScore: Number,
	programming: [{
		_id: String,
		body: String,
		answer: String,
		_v: Number
			}],
	programmingScore: Number,
	correct: [{
		_id: String,
		body: String,
		answer: String,
		_v: Number
			}],
	correctScore: Number,
	createAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = ExampapSchema