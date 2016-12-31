var mongoose = require('mongoose')

var KlassSchema = new mongoose.Schema({
	klassname: {
		unique: true,
		type: String
	},
	password: {
		type: String,
		default: 'admin'
	},
	isHistory:{
		type: Boolean,
		default: false
	},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		}
	}
})

KlassSchema.methods = {
	
}

KlassSchema.statics = {
	fetch:function(cb){
		return this
				.find({})
				.sort('meta.createAt')
				.exec(cb)
	}
}

module.exports = KlassSchema