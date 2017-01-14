import React,{ Component } from 'react'
import { Card, Table, Icon } from 'antd'

const { Column, ColumnGroup } = Table


export default class Fillblank extends Component{
	componentDidMount(){
		this.props.onShow('/item/radio',{
			method: 'GET'
		})
		console.log(this.props.onShow)
	}
	render(){
		const data = this.props.fetchingItems.data
		return (
			<Card title="试卷管理">
				<Table dataSource={data} bordered>
			        <Column
				      title="题目内容"
				      dataIndex="body"
				      key="body"
				    />
				    <Column
				      title="选项"
				      dataIndex="options"
				      key="options"
				    />
				    <Column
				      title="答案"
				      dataIndex="answer"
				      key="answer"
				    />
				    <Column
				      title="Action"
				      key="action"
				      render={(text, record) => (
				        <span>
				          <a href="#">修改</a>
				          <span className="ant-divider" />
				          <a onClick={
				          	this.props.onDelete('/item/delRadio',{
				          		method: 'DELETE',
				          		headers: {
				          			"Content-Type": "application/json"
				          		},
				          		body: JSON.stringify({ itemId: record.itemId })
				          	})
				          }>删除</a>
				          <span className="ant-divider" />
				          <a href="#" className="ant-dropdown-link">
				            More actions <Icon type="down" />
				          </a>
				        </span>
				      )}
				    />
			  </Table>
			</Card>
			)
	}
}