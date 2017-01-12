import React,{ Component } from 'react'
import { Card, Table, Icon } from 'antd'
import nock from 'nock'

const { Column, ColumnGroup } = Table

const data = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}]



export default class Item extends Component{
	constructor(props){
		super(props)
		this.state = {
			text: '123'
		}
	}
	componentWillMount(){
		this.props.onShow('/item/correct',{
			method: 'GET'
		})
		console.log(this.props.onShow)
		console.log(this.props.fetchingItems)
		console.log(this.state.text)
	}
	render(){
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
				          <a href="#">Action 一 {record.name}</a>
				          <span className="ant-divider" />
				          <a href="#">Delete</a>
				          <span className="ant-divider" />
				          <a href="#" className="ant-dropdown-link">
				            More actions <Icon type="down" />
				          </a>
				        </span>
				      )}
				    />
			  </Table>
			  <p>{this.props.fetchingItems.text}</p>
			</Card>
			)
	}
}