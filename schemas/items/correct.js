var mongoose = require('mongoose')

var CorrectSchema = new mongoose.Schema({
	body: String,
	answer: Boolean
})

module.exports = CorrectSchema