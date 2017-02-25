import React, { Component } from 'react'
import { InputNumber, Button, message } from 'antd'

class MakePaper extends Component{
	constructor(props){
		super(props)
		this.state={
			radioNumber: 5,radioScore: 3,
			multiNumber: 5,multiScore: 3,
			judgeNumber: 5,judgeScore: 3,
			fillblankNumber: 5,fillblankScore: 3,
			correctNumber: 5,correctScore: 4,
			programmingNumber: 2,programmingScore: 10,	
		}
	}
	changeRadioNumber = value => {
		this.setState({
			radioNumber: value
		})
	}
	changeRadioScore = value => {
		this.setState({
			radioScore: value
		})
	}
	changeMultiNumber = value => {
		this.setState({
			multiNumber: value
		})
	}
	changeMultiScore = value => {
		this.setState({
			multiScore: value
		})
	}
	changeJudgeNumber = value => {
		this.setState({
			judgeNumber: value
		})
	}
	changeJudgeScore = value => {
		this.setState({
			judgeScore: value
		})
	}
	changeFillblankNumber = value => {
		this.setState({
			fillblankNumber: value
		})
	}
	changeFillblankScore = value => {
		this.setState({
			fillblankScore: value
		})
	}
	changeCorrectNumber = value => {
		this.setState({
			correctNumber: value
		})
	}
	changeCorrectScore = value => {
		this.setState({
			correctScore: value
		})
	}
	changeProgrammingNumber = value => {
		this.setState({
			programmingNumber: value
		})
	}
	changeProgrammingScore = value => {
		this.setState({
			programmingScore: value
		})
	}
	modiPaperParams = () => {
		const { radioNumber,multiNumber,judgeNumber,fillblankNumber,correctNumber,programmingNumber,
				radioScore,multiScore,judgeScore,fillblankScore,correctScore,programmingScore } = this.state
		const { onModi } = this.props
		const number = {
			radioNumber: radioNumber,
			multiNumber: multiNumber,
			judgeNumber: judgeNumber,
			fillblankNumber: fillblankNumber,
			correctNumber: correctNumber,
			programmingNumber: programmingNumber,
			radioScore: radioScore,
			multiScore: multiScore,
			judgeScore: judgeScore,
			fillblankScore: fillblankScore,
			correctScore: correctScore,
			programmingScore: programmingScore
		}
		onModi('/item/modiPaperParams',{
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(number)
		})
		message.success('修改成功！')
	}
	render(){
		const { 
				radioNumber, radioScore,
				multiNumber, multiScore,
				judgeNumber, judgeScore,
				fillblankNumber, fillblankScore,
				correctNumber, correctScore,
				programmingNumber, programmingScore
				 						} = this.state
		const total = radioNumber*radioScore+
					  multiNumber*multiScore+
					  judgeNumber*judgeScore+
					  fillblankNumber*fillblankScore+
					  correctNumber*correctScore+
					  programmingNumber*programmingScore
		return (
			<div className="makepaper">
				<div>
					<p><span>个数</span> <span>分数</span> <span>合计分数</span></p>
					<span style={{marginRight: 10}}>单项选择题</span>
					<InputNumber min={1} max={20} 
								defaultValue={radioNumber} 
								onChange={this.changeRadioNumber}
								style={{marginRight: 10}}
								/>
					<InputNumber min={1} max={20} 
								defaultValue={radioScore} 
								onChange={this.changeRadioScore}
								style={{marginRight: 50}}
								/>		
					<span>{radioNumber*radioScore}</span>
				</div>
				<div>
					<span style={{marginRight: 10}}>多项选择题</span>
					<InputNumber min={1} max={20} 
								defaultValue={multiNumber} 
								onChange={this.changeMultiNumber}
								style={{marginRight: 10}}
								/>
					<InputNumber min={1} max={20} 
								defaultValue={multiScore} 
								onChange={this.changeMultiScore}
								style={{marginRight: 50}}
								/>
					<span>{multiNumber*multiScore}</span>
				</div>
				<div>
					<span style={{marginRight: 34}}>判断题</span>
					<InputNumber min={1} max={20} 
								defaultValue={judgeNumber} 
								onChange={this.changeJudgeNumber}
								style={{marginRight: 10}}
								/>
					<InputNumber min={1} max={20} 
								defaultValue={judgeScore} 
								onChange={this.changeJudgeScore}
								style={{marginRight: 50}}
								/>
					<span>{judgeNumber*judgeScore}</span>
				</div>
				<div>
					<span style={{marginRight: 34}}>填空题</span>
					<InputNumber min={1} max={20} 
								defaultValue={fillblankNumber} 
								onChange={this.changeFillblankNumber}
								style={{marginRight: 10}}
								/>
					<InputNumber min={1} max={20} 
								defaultValue={fillblankScore} 
								onChange={this.changeFillblankScore}
								style={{marginRight: 50}}
								/>
					<span>{fillblankNumber*fillblankScore}</span>
				</div>
				<div>
					<span style={{marginRight: 34}}>改错题</span>
					<InputNumber min={1} max={20} 
								defaultValue={correctNumber} 
								onChange={this.changeCorrectNumber}
								style={{marginRight: 10}}
								/>
					<InputNumber min={1} max={20} 
								defaultValue={correctScore} 
								onChange={this.changeCorrectScore}
								style={{marginRight: 50}}
								/>
					<span>{correctNumber*correctScore}</span>
				</div>
				<div>
					<span style={{marginRight: 34}}>编程题</span>
					<InputNumber min={1} max={20} 
								defaultValue={programmingNumber} 
								onChange={this.changeProgrammingNumber}
								style={{marginRight: 10}}
								/>
					<InputNumber min={1} max={20} 
								defaultValue={programmingScore} 
								onChange={this.changeProgrammingScore}
								style={{marginRight: 50}}
								/>
					<span>{programmingNumber*programmingScore}</span>
				</div>
				<p><span>总分数:</span><span>{total}</span></p>
				<Button type="default" style={{marginLeft: 260}} onClick={this.modiPaperParams}>修改参数</Button>
			</div>
		)
	}
}

export default MakePaper