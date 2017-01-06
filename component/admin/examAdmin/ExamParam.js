import React,{ Component } from 'react'
import { Card, Radio } from 'antd'

const RadioGroup = Radio.Group

export default class ExamParam extends Component{
	constructor(props){
		super(props)
		this.state={
			value: 1
		}
	}
	onChange=(e)=>{
		this.setState({
			value: e.target.value
		})
	}
	render(){
		return (
			<Card title="考试参数设置" style={{minHeight: 500}}>
				<ul className="paramul">
					<li style={{paddingRight: 60}}>
					考试组卷方式
					</li>
					<li>
						<RadioGroup value={this.state.value} onChange={this.onChange}>
							<Radio value={1}>考试随机组卷</Radio>
		        			<Radio value={2}>随机抽取已组卷</Radio>
						</RadioGroup>
					</li>
				</ul>	
			</Card>
			)
	}
}