var mongoose = require('mongoose')

var FillblankSchema = new mongoose.Schema({
	body: String,
	answer: String
})

module.exports = FillblankSchema