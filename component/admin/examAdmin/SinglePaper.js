import React, { Component } from 'react'

const SinglePaper = ({ fetched, singlePaper }) =>{
	if(fetched){
	return (
		<div>
			<h3>一、单项选择题</h3>
			<div>
			{
				singlePaper
				.radio
					.map(val =>{
						return (
							<div>
								{val.body}
								{val.options}
								{val.answer}
							</div>
								) 
					}
				)
			}
			</div>
			<h3>二、多项选择题</h3>
			<div>
				{
					singlePaper
					.multi
						.map(val => {
							return <div>
									{val.body}
									{val.options}
									{val.answer}
								   </div>
						})
				}
			</div>
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

export default SinglePaper