var express = require('express')
var router = express.Router()

var Radio = require('../models/items/radio')
var Multi = require('../models/items/multi')
var Judge = require('../models/items/judge')
var Fillblank = require('../models/items/fillblank')
var Programming = require('../models/items/programming')
var Correct = require('../models/items/correct')

module.exports = router