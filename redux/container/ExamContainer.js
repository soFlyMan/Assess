import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchExampap } from '../actions/stuActions.js'
import Exam from '../../component/student/Exam.js'
import ExamPaper from '../../component/admin/examAdmin/ExamPaper.js'

class ExamContainer extends Component{
	componentDidMount(){
		const { dispatch } = this.props
		dispatch(fetchExampap('/exam/exampaper'),{
			methond: 'GET'
		})
	}
	render(){
		const { dispatch, fetchingExampap, randomExampap, fetched } = this.props
		return (
			<Exam>
				<ExamPaper randomExampap={randomExampap} fetched={fetched}/>
			</Exam>
			)
	}
}
const randomExampap = (exampap) => {
	var n = Math.floor(Math.random()*exampap.length)
	return exampap[n]
}

const mapStateToProps = state => {
	return {
		fetchingExampap: state.fetchingExampap,
		randomExampap: randomExampap(state.fetchingExampap.data),
		fetched: state.fetchingExampap.fetched

	}
}
export default connect(mapStateToProps)(ExamContainer)