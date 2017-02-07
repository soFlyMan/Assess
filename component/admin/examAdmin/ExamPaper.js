import React, { Component } from 'react'
import { Radio } from 'antd'

const RadioGroup = Radio.Group
class ExamPaper extends Component{
	constructor(props){
		super(props)
		this.state={
			value: ''
		}
	}
	onChange(e){
		this.setState({
			value: e.target.value
		})
	}
	render(){
	var a = 1
	const { fetched, exampaper } = this.props
	console.log(exampaper)
	if(fetched){
		if(exampaper!=0){
			const paper = exampaper[exampaper.length-1]
			return (
				<div>
					<h3>一、单项选择题(每题{paper.radioScore}分)</h3>
					<div>
					{
						paper
						.radio
							.map(val =>{
								return (
									<div>
										<pre>
											<span>{a++}.</span>
											{val.body}
										</pre>
										<pre>{val.options}</pre>
										<RadioGroup onChange={this.onChange} value={this.state.value}>
											<Radio value={'A'}>A</Radio>
											<Radio value={'B'}>B</Radio>
											<Radio value={'c'}>c</Radio>
											<Radio value={'D'}>D</Radio>
										</RadioGroup>
										<br/>
									</div>
										) 
							}
						)
					}
					</div>
					<h3>二、多项选择题</h3>
					<h3>三、填空题</h3>
					<h3>四、改错题</h3>
					<h3>五、判断题</h3>
					<h3>六、编程题</h3>
				</div>
				)
		}
		}else{
			return <div>正在加载中……</div>
		}
	}
}

export default ExamPaper