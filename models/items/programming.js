var mongoose = require('mongoose')

var ProgrammingSchema = require('../../schemas/items/Programming')
var Programming = mongoose.model('Programming',ProgrammingSchema)

module.exports = Programming