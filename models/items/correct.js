var mongoose = require('mongoose')

var CorrectSchema = require('../../schemas/items/correct')
var Correct = mongoose.model('Correct',CorrectSchema)

module.exports = Correct