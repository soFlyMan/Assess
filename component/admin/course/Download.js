import React,{ Component } from 'react'
import { Card, Button } from 'antd'

export default class Download extends Component{
	render(){
		return (
			<Card title="下载管理" style={{minHeight: 500}}
			extra={<Button type="default">添加</Button>}>
			</Card>
			)
	}
}