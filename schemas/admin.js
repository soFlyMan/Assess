var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var SALT_WORK_FACTOR = 10

var AdminSchema = new mongoose.Schema({
	adminname: {
		type: String,
		default: 'soFly'
	},
	adminpassword: {
		type: String,
		default: '123'
	},
	meta:{
		createAt: {
			type: Date,
			default: Date.now()
		}
	}
})

AdminSchema.pre('save',function(next){
	var admin = this
	bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
 	if(err) return next(err)
 		bcrypt.hash(admin.adminpassword,salt,function(err,hash){
 			if(err) return next(err)

			admin.adminpassword = hash
 			next()
 		})
 })
})

AdminSchema.methods = {
	compareAdminPassword:function(_adminpassword,cb){
		bcrypt.compare(_adminpassword,this.adminpassword,function(err,isMatch){
			if(err) return cb(err)

				cb(null,isMatch)
		})
	}
}




module.exports = AdminSchema




