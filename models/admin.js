var mongoose = require('mongoose')
var AdminSchema = require('../schemas/admin.js')
var Admin = mongoose.model('Admin',AdminSchema)


// var admin = new Admin({
// 	adminname: '123',
// 	adminpassword: '123'
// })

// admin.save(function(err){
// 	if(err) console.log(err)
// })
// var admin = {
// 	adminname: '123',
// 	adminpassword: '123'
// }
// var adminname = admin.adminname
// var adminpassword = admin.adminpassword
// Admin.findOne({adminname:adminname},function(err,admin){
// 	if(err){
// 		console.log(err)
// 	}
// 	if(!admin){
// 		console.log("不存在用户admin")
// 	}else{
// 	admin.compareAdminPassword(adminpassword,function(err,isMatch){
// 		if(err){
// 		 	console.log(err)
// 		}
// 		if(isMatch){

// 		 	console.log("admin登陆成功")
// 		}if(!isMatch){
// 			console.log("admin密码错误")
// 		}
// 	})
// }
// })
module.exports = Admin