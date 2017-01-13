import React,{ Component } from 'react'
import { Card, Table, Icon } from 'antd'

const { Column, ColumnGroup } = Table


export default class Fillblank extends Component{
	componentDidMount(){
		this.props.onShow('/item/fillblank',{
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
				      title="First Name"
				      dataIndex="firstName"
				      key="firstName"
				    />
				    <Column
				      title="Age"
				      dataIndex="age"
				      key="age"
				    />
				    <Column
				      title="Address"
				      dataIndex="address"
				      key="address"
				    />
				    <Column
				      title="Action"
				      key="action"
				      render={(text, record) => (
				        <span>
				          <a href="#">修改</a>
				          <span className="ant-divider" />
				          <a href="#">删除</a>
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