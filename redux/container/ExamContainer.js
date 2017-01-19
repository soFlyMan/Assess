import React,{ Component } from 'react'
import { connect } from 'react-redux'

import Exam from '../../component/student/Exam.js'

class ExamContainer extends Component{
	render(){
		return (
			<Exam />
			)
	}
}

export default connect()(ExamContainer)