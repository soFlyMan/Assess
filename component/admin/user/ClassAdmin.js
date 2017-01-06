import React,{ Component } from 'react';
import { Card, Button, Table, Modal, Input, message, Popconfirm } from 'antd';

export default class ClassAdmin extends Component{
	constructor(props){
		super(props)
		this.state = {
			dataSource: [{klassname:'as',id:1},{klassname:'aas',id:1},{klassname:'asd',id:1}],
			visible: false,
			klassname:'',
			record:''
		}
	}
	componentWillMount(){
		this.handleKlasslist()
	}
	handleKlasslist=()=>{
		var _self = this
		var req = new Request('/admin/klass',{
			methods: 'GET'
		})
		fetch(req).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					 let i = 0
					 data.map(function(a){
							i = i+1
							return a.id = i
						})
					_self.setState({
						dataSource: data
					})
				})
			}
		}).catch(function(err){
			console.log(err.message)
		})
	}
	handleKlassname=(e)=>{
		this.setState({
			klassname: e.target.value
		})
	}
	showModal=()=>{
		console.log('asd')
		this.setState({
			visible: true
		})
	}
	handleOk=()=>{
		this.setState({
			confirmLoading: true
		})
		var _self = this
		var klass = {
			klassname: this.state.klassname
		}
		var reqadd = new Request('/admin/addklass',{
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(klass)
        })
		fetch(reqadd).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					_self.setState({
						confirmLoading: false
					})
					console.log(data)
					if(data.status==1){
						message.info('添加成功')
						_self.setState({
							visible: false
						})
						_self.handleKlasslist()
					}else if(data.status==2){
						message.info('添加失败，班级已存在！')
					}else{
						message.info('添加失败')
					}
				})
			}
		}).catch(function(err){
			console.log(err.message)
		})
	}
	handleCancel=()=>{
		this.setState({
			visible: false,
			confirmLoading: false
		})
	}
	handleDelete=(record)=>{
		const kls = {
			klassname: record.klassname
		}
		const _self = this
		const req = new Request('/admin/klassDel',{
			method: 'DELETE',
			headers: {
            "Content-Type": "application/json"
	          },
	          body: JSON.stringify(kls)
		})
		fetch(req).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					if(data.status==1){
						message.info('删除成功！')
						_self.handleKlasslist()
					}else{
						message.info('删除失败！')
					}
				})
			}
		}).catch(function(err){
			console.log(err.message)
		})
	}
	render=()=>{
		const columns = [{
			  title: '序号',
			  dataIndex: 'id',
			  key: 'id',
			}, {
			  title: '班级名',
			  dataIndex: 'klassname',
			  key: 'klassname',
			}, {
			  title: '历史',
			  dataIndex: 'isHistory',
			  key: 'isHistory',
			},{
				title:'操作',
				dataIndex: 'handle',
				key: 'handle',
				render: (text,record,index)=>{
					return (
				<span>
				<a>修改</a>
				<span className="ant-divider" />
				<Popconfirm title="确定要删除？" onConfirm={()=>this.handleDelete(record)}
				okText="确定" cancelText="取消">
				<a>删除</a>
				</Popconfirm>
				</span>
				)}
			}]
			
		return(
			<Card title="班级列表" style={{minHeight:500}} extra={
				<div><Button type="default" onClick={this.showModal}>添加班级</Button>
					<Modal title="添加班级"
			          visible={this.state.visible}
			          onOk={this.handleOk}
			          confirmLoading={this.state.confirmLoading}
			          onCancel={this.handleCancel}
			        >
			          <Input addonBefore="班级名称" onChange={this.handleKlassname}/>
			        </Modal>
				</div>
		}>
				<Table dataSource={this.state.dataSource} columns={columns} rowKey='klassname'>
				</Table>
				
			</Card>
			)
	}
}