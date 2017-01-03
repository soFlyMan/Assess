var mongoose = require('mongoose')


var ResultSchema  = new mongoose.Schema({
	userid: {
		type: Number,
	},
	coursename: {
		type: String
	},
	testdate: {
		type: Date
	},
	result: {
		type: Number
	}
})

module.exports = ResultSchema