import React, { Component } from 'react'

const Params = ({fetchingItems}) => (
	<ul className="params">
		<li>考试日期：{fetchingItems.data.date} {fetchingItems.data.time}</li>
		<li>考试时间：{fetchingItems.data.minute}</li>
		<li>考试限制：{fetchingItems.data.limit}</li>
		<li>组卷方式：{fetchingItems.data.papertype}</li>
		<li>可否查阅：{fetchingItems.data.refer}</li>
	</ul>
)

export default Params