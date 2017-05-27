
var mongoose = require('mongoose')

var db = mongoose.connection


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Assess')

module.exports = db
