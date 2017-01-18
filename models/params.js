var mongoose  = require('mongoose')
var ParamSchema = require('../schemas/params.js')

var Param = mongoose.model('Param',ParamSchema)

// var aaa = new Param({
// 		date: "2015-01-01",
// 		time: "08:30",
// 		minute: "50",
// 		papertype: "考试随机组卷",
// 		limit: "禁止考试",
// 		refer: "公布答案"
// })

// aaa.save(function(err){
// 	console.log(err)
// })
module.exports = Param