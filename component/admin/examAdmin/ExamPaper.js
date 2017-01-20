import React, { Component } from 'react'

const ExamPaper = ({radio,multi,fillblank,correct,judge,programming}) => {
	return (
		<div>
			<h3>一、单项选择题</h3>
			<h3>二、多项选择题</h3>
			<h3>三、填空题</h3>
			<h3>四、改错题</h3>
			<h3>五、判断题</h3>
			<h3>六、编程题</h3>
		</div>
		)
}

export default ExamPaper