import React,{ Component } from 'react';
import { Card } from 'antd';


export default class MyCard extends Component{
	render(){
		return(
			<div>
				<div id="mycard">
					<Card title="用户信息" style={{width:400}}>
						<p>用户信息</p>
					</Card>
				</div>
			</div>
			)
	}
}