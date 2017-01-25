var mongoose = require('mongoose')
var random = require('mongoose-simple-random')


var ProgrammingSchema = require('../../schemas/items/Programming')
ProgrammingSchema.plugin(random)

var Programming = mongoose.model('Programming',ProgrammingSchema)

module.exports = Programming