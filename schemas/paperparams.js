var mongoose = require('mongoose')

var PaperParamsSchema = new mongoose.Schema({
	radioNumber: {
		type: Number,
		default: 5
	},
	multiNumber: {
		type: Number,
		default: 5
	},
	judgeNumber: {
		type: Number,
		default: 5
	},
	fillblankNumber: {
		type: Number,
		default: 5
	},
	correctNumber: {
		type: Number,
		default: 5
	},
	programmingNumber: {
		type: Number,
		default: 2
	},
	radioScore: {
		type: Number,
		default: 3
	},
	multiScore: {
		type: Number,
		default: 3
	},
	fillblankScore: {
		type: Number,
		default: 3
	},
	judgeScore: {
		type: Number,
		default: 3
	},
	correctScore: {
		type: Number,
		default: 4
	},
	programmingScore: {
		type: Number,
		default: 10
	},
})

module.exports = PaperParamsSchema