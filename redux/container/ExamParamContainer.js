import React, { Component } from 'react'
import { connect } from 'react-redux'
import { message } from 'antd'

import ExamParam from '../../component/admin/examAdmin/ExamParam.js'
import Params from '../../component/admin/examAdmin/Params'

import { fetchParams, modiParams, fetchPaperParams } from '../actions/actions.js'

import { fetchingParams,fetchStatus } from '../reducers/reducers.js'

class ExamParamContainer extends Component{
	componentDidMount(){
		const { dispatch } = this.props
		dispatch(fetchParams('/exam/params',{
			method: 'GET',
			credentials: 'same-origin',
		}))
		dispatch(fetchPaperParams('/item/paperparams',{
			method: 'GET',
			credentials: 'same-origin'
		}))
	}
	handleExam = () => {
		const { fetchingParams, dispatch, fetchingPaperParams } = this.props
		if(fetchingParams.data.papertype=='考试随机组卷'){
			console.log('随机组卷，添加至学生信息')
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
				programmingScore: fetchingPaperParams.data.programmingScore,
				date: fetchingParams.data.date+' '+fetchingParams.data.time,
			}
			console.log(number.date)
			fetch('/item/makeRandomPaper',{
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(number)
			}).then(function(res){
				if(res.ok){
					res.json().then(function(data){
						if(data.status==1){
							message.info('发布成功！')
						}
					})
				}
			}).catch(function(err){
				console.log(err.message)
			})
		}else{
			const date = {
				date: fetchingParams.data.date + ' ' + fetchingParams.data.time
			}
			console.log('随机抽卷，添加至学生信息')
			fetch('/item/useExampap',{
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(date)
			}).then(function(res){
				if(res.ok){
					res.json().then(function(data){
						console.log(data)
						message.info('发布成功！')
					})
				}
			}).catch(function(err){
				console.log(err.message)
			})
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
		fetchStatus: state.fetchStatus,
		fetchingPaperParams: state.fetchingPaperParams
	}
}

export default connect(mapStateToProps)(ExamParamContainer)