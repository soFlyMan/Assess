import React,{ Component } from 'react'
import { Card, Radio, Input, Button, DatePicker, TimePicker, message } from 'antd'
import moment from 'moment'

import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const RadioGroup = Radio.Group
const format = 'HH:mm'

export default class ExamParam extends Component{
	constructor(props){
		super(props)
		this.state={
			_id: "587ed87f67222889d235b97d",
			date: "2017-01-01",
			time: "08:30",
			minute: "50",
			papertype: "考试随机组卷",
			limit: "禁止考试",
			refer: "公布答案",
		}
	}
	changeDate = (date,dateString) => {
		this.setState({
			date: dateString
		})
	}
	changeTime = (date,dateString) => {
		this.setState({
			time: dateString
		})
	}
	changeMinute = (e) => {
		this.setState({
			minute: e.target.value
		})
	}
	changePaperType = (e) => {
		this.setState({
			papertype: e.target.value
		})
	}
	changeLimit = (e) => {
		this.setState({
			limit: e.target.value
		})
	}
	changeRefer = (e) => {
		this.setState({
			refer: e.target.value
		})
	}
	submitParams = () => {
		const params = {
			_v:0,
			_id: this.state._id,
			date: this.state.date,
			time: this.state.time,
			minute: this.state.minute,
			papertype: this.state.papertype,
			limit: this.state.limit,
			refer: this.state.refer
		}
		 this.props.onModi('/exam/modiParams',{
		 	method: 'POST',
			credentials: 'same-origin',
		 	headers: {
		 		'Content-Type': 'application/json'
		 	},
		 	body: JSON.stringify(params)
		 })
		 message.success("提交成功！")
	}
	render(){
		const { handleExam } = this.props
		return (
			<Card title="考试参数设置" style={{minHeight: 500}}>
				<Card title="考试参数" style={{
					float: "right",
					width: 240,
					height: 240,
					marginRight: 120
				}}>
					{this.props.children}
					<Button type="default" style={{marginLeft: 120}} onClick={handleExam}>发布考试</Button>
			</Card>
			  <div>
					<ul className="paramul">
						<li style={{width: 200}}>
						考试日期设置：
						</li>
						<li>
							<DatePicker	defaultValue={moment('2017-01-01', 'YYYY-MM-DD')} onChange={this.changeDate}/>
						</li>
						<li>
							<TimePicker defaultValue={moment('08:30', format)} format={format} onChange={this.changeTime}/>
						</li>
					</ul>
				</div>
			    <ul className="paramul">
					<li style={{width: 200}}>
					考试时间设置:
					</li>
					<li>
						<Input defaultValue="50" style={{width:60}} addonAfter="分钟" onChange={this.changeMinute}/>
					</li>
				</ul>
				<div>
					<ul className="paramul">
						<li style={{width: 200}}>
						考试进入限制:
						</li>
						<li>
							<RadioGroup value={this.state.limit} onChange={this.changeLimit}>
								<Radio value={"禁止考试"}>禁止考试</Radio>
			        			<Radio value={"只允许一次"}>只允许一次</Radio>
			        			<Radio value={"可以多次进入"}>可以多次进入</Radio>
							</RadioGroup>
						</li>
					</ul>
				</div>
				<ul className="paramul">
					<li style={{width: 200}}>
					考试组卷方式
					</li>
					<li>
						<RadioGroup value={this.state.papertype} onChange={this.changePaperType}>
							<Radio value={"考试随机组卷"}>考试随机组卷</Radio>
		        			<Radio value={"随机抽取已组卷"}>随机抽取已组卷</Radio>
						</RadioGroup>
					</li>
				</ul>
				<div>
					<ul className="paramul">
						<li style={{width: 200}}>
						学生可否查阅考卷
						</li>
						<li>
							<RadioGroup value={this.state.refer} onChange={this.changeRefer}>
								<Radio value={"公布答案"}>公布答案</Radio>
			        			<Radio value={"考卷保密"}>考卷保密</Radio>
							</RadioGroup>
						</li>
					</ul>
				</div>
				<Button type="default" style={{marginLeft:260,marginTop:30}} onClick={this.submitParams}>提交</Button>
			</Card>
			)
	}
}
