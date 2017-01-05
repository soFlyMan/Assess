var mongoose = require('mongoose')
var CourseSchema = require('../schemas/courses')

var Course = mongoose.model('Course',CourseSchema)


// var course = new Course({
// 	coursename: 'Java语言程序设计',
// 	characters: [
// 		{
// 		charactername: '第一章 面向对象程序设计',
// 		sections: [
// 			{
// 			sectionname: '第一节 面向对象概述',
// 			content: '面向对象程序设计。'
// 			},
// 			{
// 			sectionname: '第二节 面向对象编程',
// 			content: '面向对象程序设计。'
// 			},
// 		]
// 	},
// 	{
// 		charactername: '第二章 面向对象程序设计',
// 		sections: [
// 			{
// 			sectionname: '第一节 面向对象概述',
// 			content: '面向对象程序设计。'
// 			}
// 		]
// 	}
// 	]
// })

// course.save(function(err){
// 	if(err){
// 		console.log(err)
// 	}
// })
module.exports =  Course