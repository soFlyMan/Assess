import React, { Component } from 'react'

var a = 1
var b = 1
var c = 1
var d = 1
var e = 1
var f = 1
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
								<pre><span>{a++}.</span>
								{val.body}</pre>
								<pre>
									{val.options}
								</pre>
								<pre>
									<span className="answer">答案：{val.answer}</span>
								</pre>
								<br/>
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
							return <div><pre>
								       <span>{b++}.</span>{val.body}</pre>
								       <pre>{val.options}</pre>
									   <pre>
									      <span className="answer">答案：
									      	{val.answer}
									      </span>
									   </pre>
									   <br/>
								   </div>
						})
				}
			</div>
			<h3>三、填空题</h3>
			{
					singlePaper
					.fillblank
						.map(val => {
							return <div><pre>
								       <span>{c++}.</span>{val.body}</pre>
									   <pre>
									      <span className="answer">答案：
									      	{val.answer}
									      </span>
									   </pre>
									   <br/>
								   </div>
						})
				}
			<h3>四、改错题</h3>
			{
					singlePaper
					.correct
						.map(val => {
							return <div><pre>
								       <span>{d++}.</span>{val.body}</pre>
									   <pre>
									      <span className="answer">答案：
									      	{val.answer}
									      </span>
									   </pre>
									   <br/>
								   </div>
						})
				}
			<h3>五、判断题</h3>
			{
					singlePaper
					.judge
						.map(val => {
							return <div><pre>
								       <span>{e++}.</span>{val.body}</pre>
									   <pre>
									      <span className="answer">答案：
									      	{val.answer}
									      </span>
									   </pre>
									   <br/>
								   </div>
						})
				}
			<h3>六、编程题</h3>
			{
					singlePaper
					.programming
						.map(val => {
							return <div>
								       <pre><span>{f++}.</span>
								       {val.body}</pre>
									   <pre>
									      <span className="answer">答案：
									      	{val.answer}
									      </span>
									   </pre>
									   <br/>
								   </div>
						})
				}
		</div>
		)
	}else{
		return <div>正在加载中……</div>
	}	
}

export default SinglePaper