import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'

import MakePaper from '../../component/admin/examAdmin/MakePaper.js'

class MakePaperContainer extends Component{
	handleChange = value => {
		console.log(value)
	}
	render(){
		return (
			<Card title="组卷参数">
				<MakePaper />
			</Card>
			)
	}
}

export default connect()(MakePaperContainer)