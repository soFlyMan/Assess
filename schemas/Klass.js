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
		type: String,
		default: '否'
	},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		}
	}
})

// KlassSchema.methods = {
	
// }

KlassSchema.statics = {
	fetch:function(cb){
		return this
				.find({})
				.sort('meta.createAt')
				.exec(cb)
	}
}

module.exports = KlassSchema