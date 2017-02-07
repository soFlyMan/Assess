import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSingleUser } from '../actions/userActions.js'
import { fetchLoginStatus } from '../actions/stuActions.js' 
import Exam from '../../component/student/Exam.js'
import ExamPaper from '../../component/admin/examAdmin/ExamPaper.js'

class ExamContainer extends Component{
	componentWillMount(){
		const { dispatch } = this.props
		dispatch(fetchLoginStatus('/logStatus',{
			method: 'GET',
			credentials: 'same-origin'
		}))
	}
	componentDidMount(){
		console.log('根据考试参数，从学生信息取出试卷')
		const { dispatch, status, fetchingLoginStatus } = this.props
		if(status){
			const id = fetchingLoginStatus.data.id
			dispatch(fetchSingleUser(`/user/${id}`,{
				method: 'POST',
				credentials: 'same-origin'
			}))
		}
	}
	render(){
		const { dispatch, exampaper, fetched } = this.props
		return (
			<Exam>
				<ExamPaper exampaper={exampaper} fetched={fetched}/>
			</Exam>
			)
	}
}
// const randomExampap = (exampap) => {
// 	var n = Math.floor(Math.random()*exampap.length)
// 	return exampap[n]
// }

const mapStateToProps = state => {
	return {
		status: state.fetchingLoginStatus.status,
		fetchingLoginStatus: state.fetchingLoginStatus,
		exampaper: state.fetchingSingleUser.exampaper,
		fetched: state.fetchingSingleUser.fetched,
	}
}
export default connect(mapStateToProps)(ExamContainer)