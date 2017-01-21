import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import { Link } from 'react-router'

import SinglePaper from '../../component/admin/examAdmin/SinglePaper.js'

class SinglePaperContainer extends Component{
	render(){
		const { single } = this.props
		return (
			<Card title="试卷" extra={<a><Link to="/admin/papercontainer">返回</Link></a>}>
				<SinglePaper fetched={single.fetched} singlePaper={single.data[0]}/>
			</Card>
			)
	}
}

const mapStateToProps = state => {
	return {
		single: state.fetchSingle
	}
}

export default connect(mapStateToProps)(SinglePaperContainer)