import React, { Component } from  'react'
import { connect } from 'react-redux'

import Exam from '../../component/student/Exam.js'
import SingleUserInfo from '../../component/admin/user/SingleUserInfo'

class ReferPaperContainer extends Component{
	render(){
		return (
			<Exam>
				<SingleUserInfo fetched={false}/>
			</Exam>
			)
	}
}

export default connect()(ReferPaperContainer)