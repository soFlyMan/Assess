import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, Card, message, Popconfirm, Modal, Form, Select, Input } from 'antd'
import { Link } from 'react-router'
import AddUser from '../../component/admin/user/AddUser.js'

import { fetchSingleUser } from '../actions/userActions.js'

const FormItem = Form.Item
const Option = Select.Option

class UserContainer extends Component{
	  constructor(props){
			super(props)
			this.state={
				  selectedRowKeys: [],  // Check here to configure the default column
			      loading: false,
			      userlist:[],
			      reRender: false,
			      userid: '',
			      id: '',
			      password: '',
			      username:'',
			      kklass: '',
			      visible: false,
			      klass: []
			}
	  }
	  componentWillMount = () => {
	  	const _self = this
	    const req = new Request('/admin/klass',{
	      method: 'GET',
	      credentials: 'same-origin',
	    })
	    fetch(req).then(function(res){
	      if(res.ok){
	        res.json().then(function(data){
	            var klassDate=data.map(function(a){
	              return a.klassname
	            })
	            console.log(klassDate)
	            _self.setState({
	              klass: klassDate
	            })
	        })
	      }
	    }).catch(function(err){
	      console,log(err.message)
	    })
	  }
	  showModal = (record) => {
	  	console.log(record)
	  	console.log(record.class)
	  	this.setState({
	  		visible: true,
	  		id: record._id,
	  		userid: record.userid,
	  		kklass: record.class,
	  		password: record.password,
	  		username: record.username,
	  	})
	  }
	  handleOk = () => {
	  	const self = this
	  	this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
		  	const info = {
		  		id: self.state.id,
		  		userid: values.userid,
		  		klass: values.klass,
		  		username: values.username
		  	}
		  	console.log(info)
		  	fetch('/user/modi',{
		  		method: 'POST',
		  		credentials: 'same-origin',
		  		headers: {
		  			'Content-Type': 'application/json'
		  		},
		  		body: JSON.stringify(info)
		  	}).then(function(res){
		  		if(res.ok){
		  			res.json().then(function(data){
		  				if(data.status==1){
		  					message.success('修改成功！')
		  					self.setState({
						  		visible: false
						  	})
						  	self.handleRender()
		  				}else{
		  					message.error('修改失败！')
		  					self.setState({
						  		visible: false
						  	})
		  				}
		  			})
		  		}
		  	}).catch(function(err){
		  		console.log(err.message)
		  	})
	      }
	    })
	  }
	  handleCancel = () => {
	  	this.setState({
	  		visible: false
	  	})
	  }
	  start = () => {
	    this.setState({ loading: true })
	    // ajax request after empty completing
	    setTimeout(() => {
	      this.setState({
	        selectedRowKeys: [],
	        loading: false,
	      });
	    }, 1000);
	  }
	  onSelectChange = (selectedRowKeys) => {
	    console.log('selectedRowKeys changed: ', selectedRowKeys)
	    this.setState({ selectedRowKeys })
	  }
	  componentDidMount(){
	    console.log(this.props.test)
	    this.handleRender()

	  }
	  handleRender = () => {
	    var req = new Request('/userlist',{
		      method: 'GET',
			  credentials: 'same-origin',
	    })
	    var _self = this
	    fetch(req).then(function(res){
	      if(res.ok){
	        res.json().then(function(data){
	          _self.setState({
	            userlist: data
	          })
	        })
	      }
	    }).catch(function(err){
	      console.log(err.message);
	    })
	  }
	  handleDel =(record) =>{
	    const _self = this
	    const user = {
	      userid: record.userid
	    }
	    const req = new Request('/admin/userDel',{
	      	method: 'DELETE',
			credentials: 'same-origin',
	      headers: {
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify(user)
	    })
	    fetch(req).then(function(res){
	      if(res.ok){
	        res.json().then(function(data){
	          if(data.status==1){
	            message.info('删除成功！')
	            _self.handleRender()
	          }else{
	            message.info('删除失败')
	          }
	        })
	      }
	    }).catch(function(err){
	      console.log(err.message)
	    })
	  }
	  handleSingele = (record) => {
	  	  const self = this
	      const id = record._id
	      const { dispatch } = this.props
	      dispatch(fetchSingleUser(`/user/${id}`,{
	        method: 'POST',
			credentials: 'same-origin',
	      }))
	  }
	  handleChange(pagination, filters, sorter){
	  	console.log('params', pagination, filters, sorter)
	  }
	  render(){
	  	const { klass } = this.state
	  	var filter = []
	  	for(var i=0;i<klass.length;i++){
	  		filter[i] = {}
	  		filter[i].text = klass[i]
	  		filter[i].value = klass[i]
	  	}
		const columns = [{
          title: '姓名',
          dataIndex: 'username',
        },{
          title:'学号',
          dataIndex:'userid'
        }, 
        {
          title: '班级',
          dataIndex: 'class',
          filters: filter,
          onFilter: (value, record) => record.class.indexOf(value) === 0
        },{
          title: '操作',
          dataIndex: 'handle',
          render: (text,record)=>{
            return (
            <span>
              <a onClick={()=>this.handleSingele(record)}><Link to="/admin/singleusercontainer">查看</Link></a>
              <span className="ant-divider" />
              <a onClick={()=>this.showModal(record)}>修改</a>
              <span className="ant-divider" />
              <Popconfirm title="确定要删除?"  
              onConfirm={()=>this.handleDel(record)} okText="确定" cancelText="取消">
                <a>删除</a>
              </Popconfirm>
            </span>
            )
          }
		}]
		const { loading, selectedRowKeys,userlist } = this.state
	    const rowSelection = {
	      selectedRowKeys,
	      onChange: this.onSelectChange,
	    }
	    const hasSelected = selectedRowKeys.length > 0
	    const { getFieldDecorator } = this.props.form
	    const formItemLayout = {
	      labelCol: { span: 6 },
	      wrapperCol: { span: 14 },
	    }
		return (
			<div>
			<Modal title="修改信息"
	          visible={this.state.visible}
	          onOk={this.handleOk}
	          onCancel={this.handleCancel}
	        >
		        <Form horizontal onChange={this.handleSubmit}>
		        	<FormItem
		        	{...formItemLayout}
	                label="学号"
	                hasFeedback>
		        	{
						getFieldDecorator('userid',{ initialValue: this.state.userid},{
							rules: [{ required: true, message: 'Please input userid!' }]
						})(
							<Input />
						)
		        	}
		        	</FormItem>
		        	<FormItem
		        	{...formItemLayout}
	                label="姓名"
	                hasFeedback>
		        	{
						getFieldDecorator('username',{ initialValue: this.state.username},{
							rules: [{ required: true, message: 'Please input username!' }]
						})(
							<Input />
						)
		        	}
		        	</FormItem>
		        	<FormItem
		        	{...formItemLayout}
	                label="密码"
	                hasFeedback>
		        	{
						getFieldDecorator('password',{ initialValue: this.state.password},{
							rules: [{ required: true, message: 'Please input password!' }]
						})(
							<Input />
						)
		        	}
		        	</FormItem>
		        	<FormItem
		        	{...formItemLayout}
	                label="班级"
	                >
		        	{
						getFieldDecorator('klass',{ initialValue: this.state.kklass },)(
						<Select>
		                	{this.state.klass.map((a,index)=><Option value={a} key={index}>{a}</Option>)}
		              	</Select>
						)
		        	}
		        	</FormItem>
		        </Form>
	        </Modal>
				<Card title="学生列表" style={{minHeight:500}} extra={<AddUser handleRender={this.handleRender} klass={this.state.klass}/>}>
			        <div style={{ marginBottom: 16 }}>
			          <Button type="primary" onClick={this.start}
			            disabled={!hasSelected} loading={loading}
			          >Reload</Button>
			          <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
			        </div>
			        <Table rowSelection={rowSelection} columns={columns} dataSource={userlist} onChange={this.handleChange}/>
	      	    </Card>
      	    </div>
			)
	}
}

const mapStateToProps = state => {
	return {
	}
}
export default connect(mapStateToProps)(Form.create({})(UserContainer))
