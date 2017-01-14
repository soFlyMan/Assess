import React,{ Component } from 'react'
import { Card, Table, Icon, Popconfirm } from 'antd'

const { Column, ColumnGroup } = Table


export default class Fillblank extends Component{
	componentDidMount(){
		this.props.onShow('/item/radio',{
			method: 'GET'
		})
		console.log(this.props.onShow)
	}
	onDelete(record){
		record.options = record.options.props.children
	  	this.props.onDelete('/item/delRadio',{
	  		method: 'DELETE',
	  		headers: {
	  			"Content-Type": "application/json"
	  		},
	  		body: JSON.stringify(record)
	  	})
	  	this.props.onShow('/item/radio',{
			method: 'GET'
		})
    }
	render(){
		const data = this.props.fetchingItems.data
		data.map(val => {
			return val.options = (<pre>{val.options}</pre>)
		})
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
				          <Popconfirm title="确定要删除?"  
          					onConfirm={()=>this.onDelete(record)} okText="确定" cancelText="取消">
				          <a>删除</a>
				          </Popconfirm>
				        </span>
				      )}
				    />
			  </Table>
			</Card>
			)
	}
}