var mongoose = require('mongoose')

var CourseSchema = new mongoose.Schema({
	coursename: {
		unique: true,
		type: String
	},
	characters: [
		{
		charactername: String,
		sections: [
			{
			sectionname: String,
			content: String,
			video: {
				type: String,
				default: ''
			}
			},
		]
	},
			],
	download: String
})

module.exports = CourseSchema
