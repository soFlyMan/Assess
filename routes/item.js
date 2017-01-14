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

router.get('/radio',function(req,res){
  Radio.find({}).exec(function(err,radios){
    if(err){
      console.log(err)
    }else{
      var k = 0
      radios.map(function(val){
        k = k+1
        return val.key = k
      })
      console.log(radios)
      res.send(radios)
    }
  })
})
router.delete('/delRadio',function(req,res){
    var body = req.body.body
    var options = req.body.options
    Radio.remove({body: body, options: options},function(err){
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