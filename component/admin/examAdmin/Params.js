import React from 'react'

const Params = ({fetchingParams}) => (
	<ul className="params">
		<li>考试日期：{fetchingParams.data.date} {fetchingParams.data.time}</li>
		<li>考试时间：{fetchingParams.data.minute} 分钟</li>
		<li>考试限制：{fetchingParams.data.limit}</li>
		<li>组卷方式：{fetchingParams.data.papertype}</li>
		<li>可否查阅：{fetchingParams.data.refer}</li>
	</ul>
)

export default Params
