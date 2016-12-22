var mongoose = require('mongoose')
var UserSchema = require('../schemas/users')
var User = mongoose.model('User',UserSchema)

// var user = new User({
// 	username: 'soFly',
// 	age: 12,
// 	sex: 'male',
// 	country: 'China',
// })

// user.save(function(err){
// 	if(err) return handleError(err)
// })

// User.find({}).exec(function (err, users) {
//   if (err) return console.error(err);
//   console.log(users);
// })
User.fetch(function(err,users){
	if(err){
		console.log('error'+err)
	}
	console.log(users)

})

module.exports = User