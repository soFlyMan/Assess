import React,{ Component } from 'react'
import { Card, Table, Icon, Popconfirm, Button, Modal, Input, message, Select } from 'antd'

const { Column, ColumnGroup } = Table
const Option = Select.Option


export default class Radio extends Component{
	constructor(props){
		super(props)
		this.state={
			loading: false,
			modal1Visible: false,
			modal2Visible:false,
			body: '',
			options: '',
			answer: '',
			id: ''
		}
	}
	componentWillMount(){
		this.props.onShow('/item/radio',{
			method: 'GET',
			credentials: 'same-origin',
		})
	}
	handleChange = (record) => {
		this.showModal
	}
	onDelete(record){
		const radioId = {
			id: record._id
		}
	  	var fetched = this.props.fetchStatus.fetched
        const self = this
        function* gen(){
			yield self.props.onDelete('/item/delRadio',{
			    	method: 'DELETE',
					credentials: 'same-origin',
			    	headers: {
			    		'Content-Type': 'application/json'
			    	},
			    	body: JSON.stringify(radioId)
			    })
	        yield message.success("删除成功！")
			yield self.props.onShow('/item/radio',{
						method: 'GET',
					credentials: 'same-origin',
					})
	        }
        var g = new gen()
        g.next()
    	if(fetched){
    		g.next()
        	g.next()
    	}else{
    		message.error("删除失败！")
    	}
  	}
	  	
    setModal1Visible(modal1Visible) {
	    this.setState({ modal1Visible });
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
    handleAnswer = (value) => {
    	this.setState({
    		answer: value
    	})
    }	
    handleOk = () => {
	    this.setState({ loading: true })
	    const radio = {
	    	body: this.state.body,
	    	options: this.state.options,
	    	answer: this.state.answer
	    }
        var fetched = this.props.fetchStatus.fetched
        const self = this
        function* gen(){
			yield self.props.onAdd('/item/addRadio',{
			    	method: 'POST',
					credentials: 'same-origin',
			    	headers: {
			    		'Content-Type': 'application/json'
			    	},
			    	body: JSON.stringify(radio)
			    })
	        yield self.setState({ loading: false, modal1Visible: false })
	        yield message.success("添加成功！")
			yield self.props.onShow('/item/radio',{
						method: 'GET',
					credentials: 'same-origin',
					})
	        }
        var g = new gen()
        g.next()
        g.next()
    	if(fetched){
    		g.next()
        	g.next()
    	}else{
    		message.error("添加失败！")
    	}
    }
    handleCancel = () => {
    	this.setState({ modal1Visible: false });
    }
    setModal2Visible = (record)=> {
    	this.setState({
    		body: record.body,
    		options: record.options.props.children,
    		answer: record.answer,
    		id: record._id,
    		modal2Visible: true
    	})
    } 
    handleModal2Cancel = () => {
    	this.setState({modal2Visible: false})
    }
    handleModal2Ok = () => {
    	this.setState({ loading: true })
	    const radio = {
	    	body: this.state.body,
	    	options: this.state.options,
	    	answer: this.state.answer,
	    	id: this.state.id
	    }
        var fetched = this.props.fetchStatus.fetched
        const self = this
        function* gen(){
			yield self.props.onModi('/item/modiRadio',{
			    	method: 'POST',
					credentials: 'same-origin',
			    	headers: {
			    		'Content-Type': 'application/json'
			    	},
			    	body: JSON.stringify(radio)
			    })
	        yield self.setState({ loading: false, modal2Visible: false })
	        yield message.success("修改成功！")
			yield self.props.onShow('/item/radio',{
						method: 'GET',
					credentials: 'same-origin',
					})
	        }
        var g = new gen()
        g.next()
        g.next()
    	if(fetched){
    		g.next()
        	g.next()
    	}else{
    		message.error("修改失败！")
    	}
    }
	render(){
		const data = this.props.fetchingItems.data
		if(data.length!==0){
			if(typeof(data[0].options)==="string"){
				data.map((val) => {
					return val.options = (<pre>{val.options}</pre>)
				})
			}
		}
		
		return (
			<Card title="单选题管理" extra={
				<div>
					<Button type="default" onClick={()=>this.setModal1Visible(true)}>添加</Button>
					<Modal
			          visible={this.state.modal1Visible}
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
			        	<lable>题目内容：</lable><Input type="textarea" autosize={{minRows: 3, maxRows: 12}} onChange={this.handleBody}/>
			        	<lable>选项:</lable><Input style={{marginBottom: 12}} type="textarea" autosize={{minRows: 6, maxRows: 12}} onChange={this.handleOptions}/>
			        	<lable>答案:</lable>
			        	<Select style={{width: 60}} onChange={this.handleAnswer}>
			        		<Option value="A">A</Option>
			        		<Option value="B">B</Option>
			        		<Option value="C">C</Option>
			        		<Option value="D">D</Option>
			        	</Select> 
			        </Modal>
			        <Modal
					          visible={this.state.modal2Visible}
					          title="修改"
					          onOk={this.handleModal2Ok}
					          onCancel={this.handleModal2Cancel}
					          footer={[
					            <Button key="back2" type="ghost" size="large" onClick={this.handleModal2Cancel}>取消</Button>,
					            <Button key="submit2" type="primary" size="large" loading={this.state.loading} onClick={this.handleModal2Ok}>
					              提交
					            </Button>,
					          ]}
					        >
					        	<lable>题目内容：</lable>
					        	<Input type="textarea" autosize={{minRows: 3, maxRows:12}} 
									 onChange={this.handleBody} value={this.state.body}/>
					        	<lable>选项:</lable>
					        	<Input style={{marginBottom: 12}} type="textarea" autosize={{minRows: 6, maxRows:12}} 
					        		 onChange={this.handleOptions} value={this.state.options}/>
					        	<lable>答案:</lable>
					        	<Select style={{width: 60}} 
					        		 onChange={this.handleAnswer} value={this.state.answer}>
					        		<Option value="A">A</Option>
					        		<Option value="B">B</Option>
					        		<Option value="C">C</Option>
					        		<Option value="D">D</Option> 
				        		 </Select> 
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
				          <a onClick={()=>this.setModal2Visible(record)}>修改</a>
				           
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