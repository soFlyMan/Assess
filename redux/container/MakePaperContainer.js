import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'antd'

import MakePaper from '../../component/admin/examAdmin/MakePaper.js'
import PaperParams from '../../component/admin/examAdmin/PaperParams.js'
import { fetchPaperParams } from '../actions/actions.js'

class MakePaperContainer extends Component{
	handleChange = value => {
		console.log(value)
	}
	componentDidMount(){
		const { dispatch } = this.props
		dispatch(fetchPaperParams('/item/paperparams'),{
			method: 'GET',
			credentials: 'same-origin'
		})
	}
	render(){
		const { fetchingPaperParams } = this.props
		return (
			<Card title="组卷参数设置" style={{minHeight: 500}}>
				<Card title="组卷参数" style={{
					float: "right",
					width: 240,
					height: 240,
					marginRight: 120
				}}>
					<PaperParams fetchingPaperParams={fetchingPaperParams}/>
					<Button type="default" style={{marginLeft: 120}}>发布考试</Button>
				</Card>
				<MakePaper />
			</Card>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		fetchingPaperParams: state.fetchingPaperParams
	}
}
export default connect(mapStateToProps)(MakePaperContainer)