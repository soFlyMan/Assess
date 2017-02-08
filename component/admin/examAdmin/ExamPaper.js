import React, { Component } from 'react'
import { Radio, Form } from 'antd'

const RadioGroup = Radio.Group
const FormItem = Form.Item
class ExamPaper extends Component{
	constructor(props){
		super(props)
		this.state={
		}
	}
	render(){
	var a = 1
	const { fetched, exampaper } = this.props
	const { onFieldsChange } = this.props.form
	console.log(onFieldsChange)
	if(fetched){
		if(exampaper!=0){
			const paper = exampaper[exampaper.length-1]
			return (
				<Form onSubmit={this.handleSubmit}>
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
										<FormItem>
											<RadioGroup>
												<Radio value={'A'}>A</Radio>
												<Radio value={'B'}>B</Radio>
												<Radio value={'c'}>c</Radio>
												<Radio value={'D'}>D</Radio>
											</RadioGroup>
										</FormItem>
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
				</Form>
				)
		}
		}else{
			return <div>正在加载中……</div>
		}
	}
}

export default  Form.create({})(ExamPaper)