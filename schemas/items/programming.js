var mongoose = require('mongoose')

var ProgrammingSchema = new mongoose.Schema({
	body: String,
	answer: String
})

module.exports = ProgrammingSchema