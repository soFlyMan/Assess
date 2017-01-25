var mongoose = require('mongoose')
var random = require('mongoose-simple-random')


var FillblankSchema = require('../../schemas/items/Fillblank')
FillblankSchema.plugin(random)

var Fillblank = mongoose.model('Fillblank',FillblankSchema)

module.exports = Fillblank