import React, { Component } from 'react'
import { connect } from 'react-redux'

import ExamParam from '../../component/admin/examAdmin/ExamParam.js'
import Params from '../../component/admin/examAdmin/Params'

import { fetchParams, modiParams } from '../actions/actions.js'

import { fetchingParams,fetchStatus } from '../reducers/reducers.js'

class ExamParamContainer extends Component{
	componentDidMount(){
		const { dispatch, fetchingParams } = this.props
		dispatch(fetchParams('/exam/params',{
			method: 'GET'
		}))
	}
	render(){
		const { dispatch, fetchingParams } = this.props
		return (
			<ExamParam 	onModi={(url,params)=>dispatch(modiParams(url,params))}
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