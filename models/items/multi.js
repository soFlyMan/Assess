var mongoose = require('mongoose')

var MultiSchema = require('../../schemas/items/Multi')
var Multi = mongoose.model('Multi',MultiSchema)

module.exports = Multi