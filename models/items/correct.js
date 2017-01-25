var mongoose = require('mongoose')
var random = require('mongoose-simple-random')


var CorrectSchema = require('../../schemas/items/correct')
CorrectSchema.plugin(random)

var Correct = mongoose.model('Correct',CorrectSchema)

module.exports = Correct