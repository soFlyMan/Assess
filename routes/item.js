var express = require('express')
var router = express.Router()

var Radio = require('../models/items/radio')
var Multi = require('../models/items/multi')
var Judge = require('../models/items/judge')
var Fillblank = require('../models/items/fillblank')
var Programming = require('../models/items/programming')
var Correct = require('../models/items/correct')

var data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}]
var a= 
`A.当运行Javac命令对一个Java源程序（.java文件）进行编译时，\
必须写出该源文件的完整文件名，包括扩展名.java\
B.当运行javac命令对一个java源程序（.java文件）进行编译时，\
  不必写出该源文件的扩展名.java\
C.\n当用Java命令解析运行一个class文件时，必须写出\
   该class文件的扩展名.class\
D.无论是运行Javac还是Java命令，后面的文件都必须给出文件扩展名 `

var radio = [{
  key: '1',
  body: '下列说法正确的是（  ）',
  options: a,
  answer: 'A'},
  ]
//radio
router.get('/radio',function(req,res){
	res.send(radio)
})
router.delete('/delRadio',function(req,res){
    var radioId = req.body.radioId
    Radio.remove({radioId: radioId},function(err){
      if(err){
        console.log(err)
      }else{
        res.send({status: 1})
      }
    })
})

//multi
router.get('/multi',function(req,res){
  res.send(data)
})
router.delete('/delRadio',function(req,res){
    var radioId = req.body.radioId
    Radio.remove({radioId: radioId},function(err){
      if(err){
        console.log(err)
      }else{
        res.send({status: 1})
      }
    })
})

//judge
router.get('/judge',function(req,res){
  res.send(data)
})
router.delete('/delRadio',function(req,res){
    var radioId = req.body.radioId
    Radio.remove({radioId: radioId},function(err){
      if(err){
        console.log(err)
      }else{
        res.send({status: 1})
      }
    })
})

//fillblank
router.get('/fillblank',function(req,res){
  res.send(data)
})
router.delete('/delRadio',function(req,res){
    var radioId = req.body.radioId
    Radio.remove({radioId: radioId},function(err){
      if(err){
        console.log(err)
      }else{
        res.send({status: 1})
      }
    })
})

//programming
router.get('/programming',function(req,res){
  res.send(data)
})
router.delete('/delRadio',function(req,res){
    var radioId = req.body.radioId
    Radio.remove({radioId: radioId},function(err){
      if(err){
        console.log(err)
      }else{
        res.send({status: 1})
      }
    })
})

//correct
router.get('/correct',function(req,res){
  res.send(data)
})
router.delete('/delRadio',function(req,res){
    var radioId = req.body.radioId
    Radio.remove({radioId: radioId},function(err){
      if(err){
        console.log(err)
      }else{
        res.send({status: 1})
      }
    })
})

module.exports = router