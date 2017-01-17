import React, { Component } from 'react'
import { connect } from 'react-redux'

import ExamParam from '../../component/admin/examAdmin/ExamParam.js'
import Params from '../../component/admin/examAdmin/Params'

class ExamParamContainer extends Component{
	render(){
		return (
			<ExamParam>
				<Params />
			</ExamParam>
			)
	}
}

export default connect()(ExamParamContainer)