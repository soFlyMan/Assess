var mongoose = require('mongoose')

var FillblankSchema = require('../../schemas/items/Fillblank')
var Fillblank = mongoose.model('Fillblank',FillblankSchema)

module.exports = Fillblank