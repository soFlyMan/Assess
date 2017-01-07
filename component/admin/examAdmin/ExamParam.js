import React,{ Component } from 'react'
import { Card, Radio, Input, Button } from 'antd'

const RadioGroup = Radio.Group

export default class ExamParam extends Component{
	constructor(props){
		super(props)
		this.state={
			type: 1,
			limit: 3,
			refer: 6
		}
	}
	changeType=(e)=>{
		this.setState({
			type: e.target.value
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
						<RadioGroup value={this.state.type} onChange={this.changeType}>
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