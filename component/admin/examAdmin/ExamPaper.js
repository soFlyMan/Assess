import React, { Component } from 'react'
import { Radio, Form, Button } from 'antd'

const RadioGroup = Radio.Group
const FormItem = Form.Item
class ExamPaper extends Component{
	constructor(props){
		super(props)
		this.state={
		}
	}
	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.props.form)
		this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values)
	      }
	    })
	    
	}
	render(){
	var a = 1
	const { fetched, exampaper } = this.props
	if(fetched&&exampaper!=0){
			const paper = exampaper[exampaper.length-1]
			const { getFieldDecorator } = this.props.form
			return (
				<Form onSubmit={this.handleSubmit}>
					<h3>一、单项选择题(每题{paper.radioScore}分)</h3>
					<div>
										{
						paper
						.radio
							.map(val =>{
								val.name = `radio${a}`
								return (
									<div>
										<pre>
											<span>{a++}.</span>
											{val.body}
										</pre>
										<pre>{val.options}</pre>
										<FormItem>
											{getFieldDecorator(`radio${a-1}`)(
													<RadioGroup>
														<Radio value="A">A</Radio>
														<Radio value="B">B</Radio>
														<Radio value="C">C</Radio>
														<Radio value="D">D</Radio>
													</RadioGroup>
											)
											}
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
					<FormItem wrapperCol={{ span: 8, offset: 4 }}>
			          <Button type="primary" htmlType="submit">
			            Submit
			          </Button>
			        </FormItem>
				</Form>
				)
		}else{
			return <div>正在加载中……</div>
		}
	}
}

var answers = []

Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
}

Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
}

export default Form.create({
	mapPropsToFields(props){
		console.log('mapPropsToFields')
		console.log(props)
		return {
			radio: { value: props.radio }
		}
	},
	onFieldsChange(props,fields){
		console.log('onFieldsChange',fields)
		const name = fields[Object.keys(fields)[0]].name
		const answer = fields[Object.keys(fields)[0]].value
		const { exampaper, onAddScore, onDecScore } = props
		const paper = exampaper[exampaper.length-1]
		console.log(paper)
		props.onChangeAnswers(fields)
		if(name.indexOf('radio')>-1){
			const radio = paper.radio.find(val => val.name === name)
			if(answers.indexOf(name)<0){
				if(radio.answer===answer){
					onAddScore(paper.radioScore)
					answers.push(name)
				}
			}else{
				if(radio.answer!==answer){
					onDecScore(paper.radioScore)
					answers.remove(name)
				}
			}
		}
		console.log(answers)		
	}
})(ExamPaper)