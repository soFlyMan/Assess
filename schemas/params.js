var mongoose = require('mongoose')

var ParamSchema = new mongoose.Schema({
	date: String,
	time: String,
	minute: String,
	limit: String,
	papertype: String,
	refer: String

})

module.exports = ParamSchema