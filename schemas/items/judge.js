var mongoose = require('mongoose')

var JudgeSchema = new mongoose.Schema({
	body: String,
	answer: String
})

module.exports = JudgeSchema