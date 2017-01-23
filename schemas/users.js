var mongoose = require('mongoose')
var bcrypt = require('bcrypt')//加盐
var SALT_WORK_FACTOR = 10 //计算强度,计算密码所需要的资源和时间

var UserSchema = new mongoose.Schema({
	username: {
		type: String
	},
	password: String,
	userid: {
		unique: true,
		type: Number
	},
	class: String,
	img: String,
	exampaper: 
		[{
			date: String,
			radio: [{
				body: String,
				options: String,
				answer: String,
				stuAnswer: String
			}],
			multi: [{
				body: String,
				options: String,
				answer: String,
				stuAnswer: String
			}],
			fillblank: [{
				body: String,
				answer: String,
				stuAnswer: String
			}],
			correct: [{
				body: String,
				answer: String,
				stuAnswer: String
			}],
			judge: [{
				body: String,
				answer: Boolean,
				stuAnswer: Boolean
			}],
			programming: [{
				body: String,
				answer: String,
				stuAnswer: String
			}],
			score: Number
		}],
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
	var user = this
//判断数据是否是新加的
	if(this.isNew){
		this.meta.createAt = this.meta.updateAt =Date.now()
	}else{
		this.meta.updateAt = Date.now()
	}
    //加盐
	bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
 	if(err) return next(err)
 		bcrypt.hash(user.password,salt,function(err,hash){
 			if(err) return next(err)

			user.password = hash
 			next()
 		})
 })

})

//实例方法
UserSchema.methods = {
	comparePassword: function(_password,cb){
		bcrypt.compare(_password,this.password,function(err,isMatch){
			if(err) return cb(err)

			cb(null,isMatch)
		})
	}
}

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



