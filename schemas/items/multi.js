var mongoose = require('mongoose')

var MultiSchema = new mongoose.Schema({
	body: String,
	options: String,
	answer: String
})

module.exports = MultiSchema