import React from 'react'
import { Tabs, Icon } from 'antd'

import SingleUserInfo from './SingleUserInfo.js'
const TabPane = Tabs.TabPane

const SingleUser = ({fetched,singleUser,tabPosition}) => {
	if(fetched){
		var a = 1
		return (
			<div>
				<ul>
					<li className="userinfo">姓名：<span>{singleUser.username}</span></li>
					<li className="userinfo">学号：<span>{singleUser.userid}</span></li>
					<li className="userinfo">查阅试卷：</li>
					<li>
						<Tabs tabPosition={tabPosition}>
						{
							singleUser.exampaper.map(val => {
								return (
									<TabPane tab={(<span><span><Icon type="file-text"/></span>{val.date}</span>)} 
											 key={a++}>
								    	<SingleUserInfo paper={val} fetched={true}/>
							    	</TabPane>
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