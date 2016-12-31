import React,{ Component } from 'react';
import { Card, Button, Table } from 'antd';


export default class ClassAdmin extends Component{
	constructor(props){
		super(props)
		this.state = {
			dataSource: []
		}
	}
	componentWillMount(){
		var _self = this
		var req = new Request('/admin/Klass',{
			methods: 'GET'
		})
		fetch(req).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					_self.setState({
						dataSource: data
					})
				})
			}
		}).catch(function(err){
			console.log(err.message)
		})
	}
	render(){
		const columns = [{
			  title: '序号',
			  dataIndex: '_id',
			  key: '_id',
			}, {
			  title: '班级名',
			  dataIndex: 'klassname',
			  key: 'klassname',
			}, {
			  title: '历史',
			  dataIndex: 'isHistory',
			  key: 'isHistory',
			}]
		return(
			<Card title="班级列表" style={{width:1000,height:1000}} extra={<Button type="default">添加班级</Button>}>
				<Table dataSource={this.state.dataSource} columns={columns}>

				</Table>
			</Card>
			)
	}
}