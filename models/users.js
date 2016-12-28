var mongoose = require('mongoose')
var UserSchema = require('../schemas/users')
var User = mongoose.model('User',UserSchema)

// var user = new User({
// 	username: 'soFly',
// 	password: '122a',
// 	userid: 123,
// })

// user.save(function(err){
// 	if(err) return handleError(err)
// })

// User.find({}).exec(function (err, users) {
//   if (err) return console.error(err);
//   console.log(users);
// })
var user = {
	username: 'soFly1',
	password: '122a'
}
var username = user.username
var password = user.password
User.findOne({username:username},function(err,user){
	if(err){
		console.log(err)
	}
	if(!user){
		console.log("不存在用户")
	}else{
	user.comparePassword(password,function(err,isMatch){
		if(err){
		 	console.log(err)
		}
		if(isMatch){

		 	console.log("登陆成功")
		}if(!isMatch){
			console.log("密码错误")
		}
	})
}
})


User.fetch(function(err,users){
	if(err){
		console.log('error'+err)
	}
	console.log(users)

})




module.exports = User