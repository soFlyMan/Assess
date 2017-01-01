import React,{ Component } from 'react';
import { Card, Button, Table, Modal, Input, message } from 'antd';


export default class ClassAdmin extends Component{
	constructor(props){
		super(props)
		this.state = {
			dataSource: [],
			visible: false,
			klassname:''
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
				<Table dataSource={this.state.dataSource} columns={columns}>
				</Table>
				
			</Card>
			)
	}
}