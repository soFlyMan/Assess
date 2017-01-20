import React, { Component } from 'react'
import { connect } from 'react-redux'

import Exam from '../../component/student/Exam.js'
import ExamPaper from '../../component/admin/examAdmin/ExamPaper.js'

class ExampapContainer extends Component{
	render(){
		return (
			<Exam>
				<ExamPaper />
			</Exam>
			)
	}
}

export default connect()(ExampapContainer)