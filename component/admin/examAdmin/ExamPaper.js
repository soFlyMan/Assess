import React, { Component } from 'react'

var a = 1
const ExamPaper = ({fetched,randomExampap}) => {
	if(fetched){
	return (
		<div>
			<h3>一、单项选择题</h3>
			<div>
			{
				randomExampap
				.radio
					.map(val =>{
						return (
							<div>
								<span>{a++}.</span>
								{val.body}
								<div>{val.options}</div>
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
	}else{
		return <div>正在加载中……</div>
	}
}

export default ExamPaper