import React, { Component } from 'react'
import { connect } from 'react-redux'

import ExamParam from '../../component/admin/examAdmin/ExamParam.js'
import Params from '../../component/admin/examAdmin/Params'

import { fetchItems,modiItems } from '../actions/actions.js'

import { fetchingItems } from '../reducers/reducers.js'

class ExamParamContainer extends Component{
	componentDidMount(){
		const { dispatch, fetchingItems } = this.props
		dispatch(fetchItems('/exam/params',{
			method: 'GET'
		}))
	}
	render(){
		const { dispatch, fetchingItems } = this.props
		return (
			<ExamParam onModi={(url,params)=>dispatch(modiItems(url,params))}>
				<Params fetchingItems={ fetchingItems }/>
			</ExamParam>
			)
	}
}

const mapStateToProps = state => {
	return {
		fetchingItems: state.fetchingItems
	}
}

export default connect(mapStateToProps)(ExamParamContainer)