import React,{ Component } from 'react'
import { Card, Radio, Input, Button, DatePicker, TimePicker } from 'antd'
import moment from 'moment'

import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const RadioGroup = Radio.Group
const format = 'HH:mm'

export default class ExamParam extends Component{
	constructor(props){
		super(props)
		this.state={
			papertype: 1,
			limit: 3,
			refer: 6
		}
	}
	changePaperType=(e)=>{
		this.setState({
			papertype: e.target.value
		})
	}
	changeLimit=(e)=>{
		this.setState({
			limit: e.target.value
		})
	}
	changeRefer=(e)=>{
		this.setState({
			refer: e.target.value
		})
	}
	render(){
		return (
			<Card title="考试参数设置" style={{minHeight: 500}}>
				<Card title="考试参数" style={{
					float: "right",
					width: 240,
					height: 240,
					marginRight: 120
				}}>
					{this.props.children}
				</Card>	
			  <div>
					<ul className="paramul">
						<li style={{width: 200}}>
						考试日期设置：
						</li>
						<li>
							<DatePicker	defaultValue={moment('2015-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss')} />				
						</li>
						<li>
							<TimePicker defaultValue={moment('08:30', format)} format={format} />
						</li>
					</ul>
				</div>
			    <ul className="paramul">
					<li style={{width: 200}}>
					考试时间设置:
					</li>
					<li>
						<Input defaultValue="50" style={{width:60}} addonAfter="分钟"/>
					</li>
				</ul>
				<div>
					<ul className="paramul">
						<li style={{width: 200}}>
						考试进入限制:
						</li>
						<li>
							<RadioGroup value={this.state.limit} onChange={this.changeLimit}>
								<Radio value={3}>禁止考试</Radio>
			        			<Radio value={4}>只允许一次</Radio>
			        			<Radio value={5}>可以多次进入</Radio>
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
							<Radio value={1}>考试随机组卷</Radio>
		        			<Radio value={2}>随机抽取已组卷</Radio>
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
								<Radio value={6}>公布答案</Radio>
			        			<Radio value={7}>考卷保密</Radio>
							</RadioGroup>					
						</li>
					</ul>
				</div>
				<Button type="default" style={{marginLeft:260,marginTop:30}}>提交</Button>
			</Card>
			)
	}
}