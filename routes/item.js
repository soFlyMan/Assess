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
	res.send(data)
})

router.get('/multi',function(req,res){
  res.send(data)
})

router.get('/judge',function(req,res){
  res.send(data)
})

router.get('/fillblank',function(req,res){
  res.send(data)
})

router.get('/programming',function(req,res){
  res.send(data)
})

router.get('/correct',function(req,res){
  res.send(data)
})
module.exports = router