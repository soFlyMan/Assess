var mongoose = require('mongoose')
var random = require('mongoose-simple-random')


var JudgeSchema = require('../../schemas/items/Judge')
JudgeSchema.plugin(random)

var Judge = mongoose.model('Judge',JudgeSchema)

module.exports = Judge