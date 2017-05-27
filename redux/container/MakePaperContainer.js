import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, message } from 'antd'

import MakePaper from '../../component/admin/examAdmin/MakePaper.js'
import PaperParams from '../../component/admin/examAdmin/PaperParams.js'
import { fetchPaperParams, modiPaperParams } from '../actions/actions.js'

class MakePaperContainer extends Component{
	componentDidMount(){
		const { dispatch } = this.props
		dispatch(fetchPaperParams('/item/paperparams'),{
			method: 'GET',
			credentials: 'same-origin'
		})
	}
	addRandomPaper = () => {
		const { fetchingPaperParams } = this.props
		const number = {
			radioNumber: fetchingPaperParams.data.radioNumber,
			multiNumber: fetchingPaperParams.data.multiNumber,
			fillblankNumber: fetchingPaperParams.data.fillblankNumber,
			judgeNumber: fetchingPaperParams.data.judgeNumber,
			correctNumber: fetchingPaperParams.data.correctNumber,
			programmingNumber: fetchingPaperParams.data.programmingNumber,
			radioScore: fetchingPaperParams.data.radioScore,
			multiScore: fetchingPaperParams.data.multiScore,
			fillblankScore: fetchingPaperParams.data.fillblankScore,
			judgeScore: fetchingPaperParams.data.judgeScore,
			correctScore: fetchingPaperParams.data.correctScore,
			programmingScore: fetchingPaperParams.data.programmingScore
		}
		fetch('/item/randomPaper',{
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(number)
		}).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					message.success('提交成功！')
				})
			}
		}).catch(function(err){
			console.log(err.message)
		})
	}
	render(){
		const { dispatch, fetchingPaperParams } = this.props
		return (
			<Card title="组卷参数设置" style={{minHeight: 500}}>
				<Card title="组卷参数" style={{
					float: "right",
					width: 240,
					height: 240,
					marginRight: 120
				}}>
					<PaperParams fetchingPaperParams={fetchingPaperParams}/>
					<Button type="default" style={{marginLeft: 120}} onClick={this.addRandomPaper}>随机组卷</Button>
				</Card>
				<MakePaper onModi={(url,params)=>dispatch(modiPaperParams(url,params))}/>
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
