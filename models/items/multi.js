var mongoose = require('mongoose')
var random = require('mongoose-simple-random')


var MultiSchema = require('../../schemas/items/Multi')
MultiSchema.plugin(random)

var Multi = mongoose.model('Multi',MultiSchema)

// var multi1 = new Multi({
//   body: '下列说法正确的是（ 1 ）',
//   options: `A.当运行Javac命令对一个Java源程序（.java文件）进行编译时，
// 必须写出该源文件的完整文件名，包括扩展名.java
// B.当运行javac命令对一个java源程序（.java文件）进行编译时，
//   不必写出该源文件的扩展名.java
// C.当用Java命令解析运行一个class文件时，必须写出
//    该class文件的扩展名.class
// D.无论是运行Javac还是Java命令，后面的文件都必须给出文件扩展名1111`,
//   answer: 'AB'
// })

// var multi2 = new Multi({
//   body: '下列说法正确的是（ 2 ）',
//   options: `A.当运行Javac命令对一个Java源程序（.java文件）进行编译时，
// 必须写出该源文件的完整文件名，包括扩展名.java
// B.当运行javac命令对一个java源程序（.java文件）进行编译时，
//   不必写出该源文件的扩展名.java
// C.当用Java命令解析运行一个class文件时，必须写出
//    该class文件的扩展名.class
// D.无论是运行Javac还是Java命令，后面的文件都必须给出文件扩展名2222`,
//   answer: 'AC'
// })
// multi1.save(function(err){
// 	if(err) console.log(err)
// })
// multi2.save(function(err){
// 	if(err) console.log(err)
// })

module.exports = Multi