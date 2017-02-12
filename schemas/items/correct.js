var mongoose = require('mongoose')

var CorrectSchema = new mongoose.Schema({
	body: String,
	answer: String
})

module.exports = CorrectSchema