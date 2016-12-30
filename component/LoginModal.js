import React from 'react';
import ReactDOM from 'react-dom';
import { message, Form, Icon, Input, Checkbox, Modal, Button } from 'antd';
import { Link } from 'react-router';

const FormItem = Form.Item;

const LoginModal = Form.create()(React.createClass({
  getInitialState() {
    return {
      username:'',
      password:'' ,
      visible: false,
      loginstatus: false };
  },
  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  },
  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('Clicked OK');
    var _self = this
    var req = new Request('/signin',{
          method: 'POST',
          headers: {
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    'Content-Type': 'application/json'
                    },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
        fetch(req).then(function(res){
          if(res.ok){
            res.json().then(function(data){
              console.log(JSON.stringify(data))
              if(data.status==1){
                _self.setState({
                visible: false,
                loginstatus: true
              })
              }else if(data.status==2){
                message.info('Password is error !')
              }else{
                message.info('User Name is error!')
              }
              
            })
            }
        }).catch(function(err){
          console.log("err"+err.message)
        })
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }, 
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    console.log("登陆！登陆！！！！！")
  },
  logOut(){
    console.log("退出")
    this.setState({
      loginstatus: false
    })
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>{ this.state.loginstatus?<div><Button type="default" disabled>已登陆</Button><Button type="default" onClick={this.logOut}>退出</Button></div>:
        <Button type="default" onClick={this.showModal}>登陆</Button>}
        <Modal title="请登陆!" okText="登陆" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入学号！' }],
              })(
                <Input addonBefore={<Icon type="user" />} placeholder="请输入学号！" onChange={this.handleUsername}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码！' }],
              })(
                <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码！" onChange={this.handlePassword}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住我</Checkbox>
              )}
              <a className="login-form-forgot">重置密码</a>
              <br/>
              <p><Link to="/adminlogin">管理员登陆</Link></p>
              <p style={{color:'#ccc'}}>提示：初始密码为学号，登陆后请修改密码。</p>
            </FormItem>
          </Form>
        </Modal>
      
      </div>
    );
  },
}));

export default LoginModal