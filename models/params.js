var mongoose  = require('mongoose')
var ParamSchema = require('../schemas/params.js')

var Param = mongoose.model('Param',ParamSchema)

module.exports = Param