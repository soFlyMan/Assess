var mongoose = require('mongoose')

var RadioSchema = new mongoose.Schema({
	body: String,
	options: String,
	answer: String
})



module.exports = RadioSchema