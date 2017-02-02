import React, { Component } from 'react'
import { connect } from 'react-redux'

import ExamParam from '../../component/admin/examAdmin/ExamParam.js'
import Params from '../../component/admin/examAdmin/Params'

import { fetchParams, modiParams } from '../actions/actions.js'

import { fetchingParams,fetchStatus } from '../reducers/reducers.js'

class ExamParamContainer extends Component{
	componentDidMount(){
		const { dispatch } = this.props
		dispatch(fetchParams('/exam/params',{
			method: 'GET',
			credentials: 'same-origin',
		}))
	}
	handleExam = () => {
		const { fetchingParams } = this.props
		if(fetchingParams.data.papertype=='考试随机组卷'){
			console.log('随机组卷，添加至学生信息')
		}else{
			console.log('随机抽卷，添加至学生信息')
		}
	}
	render(){
		const { dispatch, fetchingParams } = this.props
		return (
			<ExamParam 	onModi={(url,params)=>dispatch(modiParams(url,params))}
						handleExam={this.handleExam}
			>
				<Params fetchingParams={ fetchingParams }/>
			</ExamParam>
			)
	}
}

const mapStateToProps = state => {
	return {
		fetchingParams: state.fetchingParams,
		fetchStatus: state.fetchStatus
	}
}

export default connect(mapStateToProps)(ExamParamContainer)