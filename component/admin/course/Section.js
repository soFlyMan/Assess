import React,{ Component } from 'react'
import { Card, Button } from 'antd'

export default class Section extends Component{
	render(){
		return (
			<Card title="章节管理" style={{minHeight: 500}} 
			extra={<Button type="default">添加章节</Button>}>

			</Card>
	)}
}