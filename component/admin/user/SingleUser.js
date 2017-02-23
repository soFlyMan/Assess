import React from 'react'
import { Tabs } from 'antd'

import SingleUserPaper from './SingleUserPaper.js'
const TabPane = Tabs.TabPane

const SingleUser = ({fetched,singleUser}) => {
	if(fetched){
		var a = 1
		return (
			<div>
				<ul>
					<li>姓名：{singleUser.username}</li>
					<li>学号：{singleUser.userid}</li>
					<li>查看试卷：</li>
					<li>
						<Tabs type="card">
						{
							singleUser.exampaper.map(val => {
								return (
									<TabPane tab={val.date} key={a++}><SingleUserPaper paper={val}/></TabPane>
								)
							})
						}
						</Tabs>
					</li>
				</ul>
			</div>
			)
	}else{
		return (
		<div>
			正在加载中……
		</div>
		)
	}
}

export default SingleUser