var mongoose = require('mongoose')

var RadioSchema = require('../../schemas/items/radio')
var Radio = mongoose.model('Radio',RadioSchema)

module.exports = Radio