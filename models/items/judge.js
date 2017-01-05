var mongoose = require('mongoose')

var JudgeSchema = require('../../schemas/items/Judge')
var Judge = mongoose.model('Judge',JudgeSchema)

module.exports = Judge