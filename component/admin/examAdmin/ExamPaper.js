import React, { Component } from 'react'
import { Radio, Form, Button, Checkbox, Input, Modal, Card } from 'antd'
import { Link, browserHistory } from 'react-router'

const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group
const FormItem = Form.Item
const confirm = Modal.confirm

const options = [
	{ label: 'A', value: 'A' },
	{ label: 'B', value: 'B' },
	{ label: 'C', value: 'C' },
	{ label: 'D', value: 'D' },
	{ label: 'E', value: 'E' },
	{ label: 'F', value: 'F' }
]


class ExamPaper extends Component{
	constructor(props){
		super(props)
		this.state={
		}
	}
	success() {
	  Modal.success({
	    title: '提交成功！！',
	    content: '',
	    onOk() {
	     	// browserHistory.push('/referpapercontainer')
	     	window.location.href='/#/referpapercontainer'

	    },
	  })
	}
	showConfirm = (values) => {
	  const self = this
	  confirm({
	    title: '确定要提交吗？',
	    content: '',
	    onOk() {
	      console.log(values)
	      self.success(values)
	    },
	    onCancel() {},
	  });
	}
	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.props.form)
		this.props.form.validateFields((err, values) => {
	      if (!err) {
	      	console.log('values:',values)
			this.showConfirm(values)
	      }
	    })
	    
	}
	render(){
	var a = 1
	var b = 1
	var c = 1
	var d = 1
	var e = 1
	var f = 1
	const { fetched, exampaper } = this.props
	if(fetched&&exampaper!=0){
			const paper = exampaper[exampaper.length-1]
			const { getFieldDecorator } = this.props.form
			return (
				<Form onSubmit={this.handleSubmit}>
					<h3>一、单项选择题(每题{paper.radioScore}分，共{paper.radio.length*paper.radioScore}分)</h3>
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
					<h3>二、多项选择题(每题{paper.multiScore}分，共{paper.multi.length*paper.multiScore}分)</h3>
					{
						paper.multi.map(val => {
							val.name = `multi${b}`
							return (
								<div>
									<pre>{b++}.<span>{val.body}</span></pre>
									<pre>{val.options}</pre>
									<FormItem>
										{
											getFieldDecorator(`multi${b-1}`)(
											<CheckboxGroup options={options} />
											)
										}
									</FormItem>
								</div>
							)
						})
					}
					<h3>三、填空题(每题{paper.fillblankScore}分，共{paper.fillblank.length*paper.fillblankScore}分)</h3>
					{
						paper.fillblank.map(val => {
							val.name = `fillblank${c}`
							return (
								<div>
									<pre>{c++}.<span>{val.body}</span></pre>
									<FormItem>
									{
										getFieldDecorator(`fillblank${c-1}`)(
										<ul>
										 	<li style={{float: "left"}}><span style={{color: "#89c7f5"}}>答案：</span></li>
											<li><Input type="textarea" autosize={{minRows: 1, maxRows: 6}} style={{width: 400}} placeholder="提示：多个填空请用空格分隔。"/></li>
										</ul>
										)
									}
									</FormItem>
								</div>	
								)
						})
					}
					<h3>四、改错题(每题{paper.correctScore}分，共{paper.correct.length*paper.correctScore}分)</h3>
					{
						paper.correct.map(val => {
							val.name = `correct${d}`
							return (
								<div>
									<pre>{d++}.<span>{val.body}</span></pre>
									<FormItem>
									{
										getFieldDecorator(`correct${d-1}`)(
										<ul>
										 	<li style={{float: "left"}}><span style={{color: "#89c7f5"}}>答案：</span></li>
											<li><Input type="textarea" style={{width: 400}} autosize={{minRows: 1, maxRows: 6}}/></li>	
										</ul>
										)
									}
									</FormItem>
								</div>
							)
						})
					}
					<h3>五、判断题(每题{paper.judgeScore}分，共{paper.judge.length*paper.judgeScore}分)</h3>
					{
						paper.judge.map(val => {
							val.name = `judge${e}`
							return (
								<div>
									<pre>{e++}.<span>{val.body}</span></pre>
									<FormItem>
									{
										getFieldDecorator(`judge${e-1}`)(
											<RadioGroup>
												<Radio value="是">是</Radio>
												<Radio value="否">否</Radio>
											</RadioGroup>
											)
									}
									</FormItem>
								</div>
								)
						})
					}
					<h3>六、编程题(每题{paper.programmingScore}分，共{paper.programming.length*paper.programmingScore}分)</h3>
					{
						paper.programming.map(val => {
							val.name = `programming${f}`
							return (
								<div>
									<pre>{f++}.<span>{val.body}</span></pre>
								</div>
							)
						})
					}
					<FormItem wrapperCol={{ span: 8, offset: 4 }}>
				          <Button type="primary" htmlType="submit">
				            提交试卷
				          </Button>
			        </FormItem>
				</Form>
				)
		}else{
			return (
				<Card loading title="正在加载中……" style={{ width: "80%" , margin:"0 auto"}}>
			  	</Card>
			)
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
		console.log('mapPropsToFields',props)
		return {

		}
	},
	onFieldsChange(props,fields){
		console.log('onFieldsChange',fields)
		var field = Object.assign({},fields)
		const name = field[Object.keys(field)[0]].name
		const answer = field[Object.keys(field)[0]].value
		const { exampaper, onAddScore, onDecScore } = props
		const exampap = exampaper[exampaper.length-1]
		var paper = Object.assign({},exampap) 
		console.log(paper)
		props.onChangeAnswers(field)
		if(name.indexOf('radio')>-1){
			const radio = paper.radio.find(val => val.name === name)
			paper.radio.map(val => {
				if(val.name === name){
					return val.stuAnswer = answer
				}else{
					return val
				}
			})
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
		}else if(name.indexOf('multi')>-1){
			const multi = paper.multi.find(val => val.name === name)
			paper.multi.map(val => {
				if(val.name === name){
					return val.stuAnswer = answer
				}else{
					return val
				}
			})
			if(answers.indexOf(name)<0){
				if(multi.answer===answer.sort().toString().replace(/,/g,'')){
					onAddScore(paper.multiScore)
					answers.push(name)
				}
			}else{
				if(multi.answer!==answer.sort().toString().replace(/,/g,'')){
					onDecScore(paper.multiScore)
					answers.remove(name)
				}
			}
		}else if(name.indexOf('fillblank')>-1){
			console.log('fillblank')
			const fillblank = paper.fillblank.find(val => val.name === name)
			paper.radio.fillblank(val => {
				if(val.name === name){
					return val.stuAnswer = answer
				}else{
					return val
				}
			})
			if(answers.indexOf(name)<0){
				if(fillblank.answer.trim()===answer.trim()){
					onAddScore(paper.fillblankScore)
					answers.push(name)
				}
			}else{
				if(fillblank.answer.trim()!==answer.trim()){
					onDecScore(paper.fillblankScore)
					answers.remove(name)
				}
			}
		}else if(name.indexOf('correct')>-1){
			const correct = paper.correct.find(val => val.name === name)
			paper.correct.map(val => {
				if(val.name === name){
					return val.stuAnswer = answer
				}else{
					return val
				}
			})
			console.log(correct)
			if(answers.indexOf(name)<0){
				if(correct.answer.trim()===answer.trim()){
					onAddScore(paper.correctScore)
					answers.push(name)
				}
			}else{
				if(correct.answer.trim()!==answer.trim()){
					onDecScore(paper.correctScore)
					answers.remove(name)
				}
			}
		}else if(name.indexOf('judge')>-1){
			const judge = paper.judge.find(val => val.name === name)
			paper.judge.map(val => {
				if(val.name === name){
					return val.stuAnswer = answer
				}else{
					return val
				}
			})
			if(answers.indexOf(name)<0){
				if(judge.answer===answer){
					onAddScore(paper.judgeScore)
					answers.push(name)
				}
			}else{
				if(judge.answer!==answer){
					onDecScore(paper.judgeScore)
					answers.remove(name)
				}
			}
		}else if(name.indexOf('programming')>-1){
			console.log('programming')
		}
		console.log(answers)		
	}
})(ExamPaper)