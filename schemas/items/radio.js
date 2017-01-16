var mongoose = require('mongoose')

var RadioSchema = new mongoose.Schema({
	body: String,
	options: String,
	answer: String
})


RadioSchema.statics = {
	findById:function(id,cb){
		return this
			.findOne({_id: id})
			.exec(cb)
	}
}
module.exports = RadioSchema