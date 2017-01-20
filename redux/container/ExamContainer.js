import React, { Component } from 'react'
import { connect } from 'react-redux'

import Exam from '../../component/student/Exam.js'
import ExamPaper from '../../component/admin/examAdmin/ExamPaper.js'

class ExamContainer extends Component{
	render(){
		const { dispatch, fetchingExampap } = this.props
		return (
			<Exam>
				<ExamPaper fetchingExampap={fetchingExampap}/>
			</Exam>
			)
	}
}

const mapStateToProps = state => {
	return {
		fetchingExampap: state.fetchingExampap
	}
}
export default connect(mapStateToProps)(ExamContainer)