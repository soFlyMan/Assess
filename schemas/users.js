var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

var UserSchema = new mongoose.Schema({
	username: {
		unique: true,
		type: String
	},
	password: String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
})

//每次在存储一个数据之前都会调用该方法
UserSchema.pre('save',function(next){
//判断数据是否是新加的
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt =Date.now()
	}else{
		this.meta.updateAt = Date.now()
	}

	next()
})

//静态方法，模型实例化之后才会具有该方法
UserSchema.statics = {
	//用于取出数据库中的所有数据
	fetch:function(cb){
		return this
			.find({})
			.sort('meta.updateAt') //按照更新时间排序
			.exec(cb)
	},
	//查询单条数据方法
	findById:function(id,cb){
		return this
			.findOne({_id: id})
			.exec(cb)
	}
}

module.exports = UserSchema



