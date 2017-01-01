
var mongoose = require('mongoose')
// var Schema = mongoose.Schema

var db = mongoose.connection

// var userSchema = new Schema({
// 	username:String,
// 	test:String
// })

// var User = mongoose.model('User',userSchema)

// var user = new User({
// 	username:'soFly',
// 	test:'Are you kidding me?'
// })

// user.save(function(err){
// 	if(err) return handleError(err)
// })

// User.find({}).exec(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Assess')

module.exports = db