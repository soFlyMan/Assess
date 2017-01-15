import React,{ Component } from 'react'
import { Card, Table, Icon, Popconfirm, Button, Modal, Input } from 'antd'

const { Column, ColumnGroup } = Table


export default class Fillblank extends Component{
	constructor(props){
		super(props)
		this.state={
			loading: false,
			visible: false,
			body: '',
			options: '',
			answer: ''
		}
	}
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
    showModal = () => {
    	this.setState({
    		visible: true
    	})
    }
    handleBody = (e) => {
    	this.setState({
    		body: e.target.value
    	})
    }
    handleOptions = (e) => {
    	this.setState({
    		options: e.target.value
    	})
    }
    handleAnswer = (e) => {
    	this.setState({
    		answer: e.target.value
    	})
    }	
    handleOk = () => {
	    this.setState({ loading: true });
	    setTimeout(() => {
	      this.setState({ loading: false, visible: false });
	    }, 3000);
	    const radio = {
	    	body: this.state.body,
	    	options: this.state.options,
	    	answer: this.state.answer
	    }
	    this.props.onAdd('/item/addRadio',{
	    	method: 'POST',
	    	headers: {
	    		"Content-Type": "application/json"
	    	},
	    	body: JSON.stringify(radio)
	    })
    }
    handleCancel = () => {
    this.setState({ visible: false });
    }
	render(){
		const data = this.props.fetchingItems.data
		data.map(val => {
			return val.options = (<pre>{val.options}</pre>)
		})
		return (
			<Card title="单选题管理" extra={
				<div>
					<Button type="default" onClick={this.showModal}>添加</Button>
					<Modal
			          visible={this.state.visible}
			          title="添加"
			          onOk={this.handleOk}
			          onCancel={this.handleCancel}
			          footer={[
			            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>取消</Button>,
			            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
			              提交
			            </Button>,
			          ]}
			        >
			        	<lable>题目内容：</lable><Input type="textarea" rows={3} onChange={this.handleBody}/>
			        	<lable>选项:</lable><Input type="textarea" rows={6} onChange={this.handleOptions}/>
			        	<lable>答案:</lable><Input onChange={this.handleAnswer}/> 
			        </Modal>
				</div>
			}>
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
				      title="操作"
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