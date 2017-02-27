import React from 'react'
import { Card } from 'antd'

const SingleUserInfo = ({fetched,paper}) => {
	if(fetched){
	var a = 1
	var b = 1
	var c = 1
	var d = 1
	var e = 1
	var f = 1
	return (
		<div>
			<h3>一、单项选择题(每题{paper.radioScore}分，共{paper.radio.length*paper.radioScore}分)</h3>
			<div>
			{
				paper
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
								<pre>
									<span style={val.answer==val.stuAnswer?{color: "#ccc"} : {color: "#F00"}}>学生答案：{val.stuAnswer||'未答'}</span>
								</pre>
								<br/>
							</div>
								) 
					}
				)
			}
			</div>
			<h3>二、多项选择题(每题{paper.multiScore}分，共{paper.multi.length*paper.multiScore}分)</h3>
			<div>
				{
					paper
					.multi
						.map(val => {
							return <div>
									<pre>
						       		  <span>{b++}.</span>{val.body}
							       	</pre>
							        <pre>{val.options}</pre>
							        <span className="answer">答案：
							      	{val.answer}
							        </span>
							        <pre>
										<span className="answer">学生答案：{val.answer}</span>
									</pre>
								    <br/>
								   </div>
						})
				}
			</div>
			<h3>三、填空题(每题{paper.fillblankScore}分，共{paper.fillblank.length*paper.fillblankScore}分)</h3>
			{
					paper
					.fillblank
						.map(val => {
							return <div><pre>
								       <span>{c++}.</span>{val.body}</pre>
									   <pre>
									      <span className="answer">答案：
									      	{val.answer}
									      </span>
									   </pre>
									   <pre>
										  <span className="answer">学生答案：{val.answer}</span>
									   </pre>
									   <br/>
								   </div>
						})
				}
			<h3>四、改错题(每题{paper.correctScore}分，共{paper.correct.length*paper.correctScore}分)</h3>
			{
					paper
					.correct
						.map(val => {
							return <div><pre>
								       <span>{d++}.</span>{val.body}</pre>
									   <pre>
									      <span className="answer">答案：
									      	{val.answer}
									      </span>
									   </pre>
									   <pre>
										  <span className="answer">学生答案：{val.answer}</span>
									   </pre>
									   <br/>
								   </div>
						})
				}
			<h3>五、判断题(每题{paper.judgeScore}分，共{paper.judge.length*paper.judgeScore}分)</h3>
			{
					paper
					.judge
						.map(val => {
							return <div>
									  <pre>
								       <span>{e++}.</span>
								       {val.body}
							          </pre>
								      <span className="answer">答案：
								      	{val.answer}
								      </span>
								      <pre>
										  <span className="answer">学生答案：{val.answer}</span>
								      </pre>
								      <br/>
								   </div>
						})
				}
			<h3>六、编程题(每题{paper.programmingScore}分，共{paper.programming.length*paper.programmingScore}分)</h3>
			{
					paper
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
									   <pre>
										  <span className="answer">学生答案：{val.answer}</span>
									   </pre>
									   <br/>
								   </div>
						})
				}
		</div>
		)	
	}else{
		return (
			<Card loading>正在加载中……</Card>
			)
	}
}

export default SingleUserInfo