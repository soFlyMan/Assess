import React from 'react';
import { Link } from 'react-router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Mock from 'mockjs';

import Admin from './Admin.js';

const FormItem = Form.Item;

const AdminLogin = Form.create()(React.createClass({
  getInitialState(){
    return {
      adminname:'',
      adminpassword:'',
      success: false
    }
  },
  handleAdminname(e){
    this.setState({
      adminname:e.target.value
    })
  },
  handlePassword(e){
    this.setState({
      adminpassword:e.target.value
    })
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    var _self = this
    var req = new Request('/adminsignin',{
          method: 'POST',
          headers: {
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    'Content-Type': 'application/json'
                    },
          body: JSON.stringify({
            adminname: this.state.adminname,
            adminpassword: this.state.adminpassword
          })
        })
        console.log(req.context)
        fetch(req).then(function(res){
          console.log(req)
          if(res.ok){
            console.log(req.context)
            res.json().then(function(data){
              console.log(JSON.stringify(data))
              _self.setState({
                success: true
              })
            })
          }
        }).catch(function(err){
          console.log("err"+err.message)
        })
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (<div style={{height:"100%"}}>{this.state.success?<Admin />:
  <div id="admincontainer">
    <div id="adminlogin">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('adminname', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username" onChange={this.handleAdminname}/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('adminpassword', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" onChange={this.handlePassword} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}>
            Log in
          </Button>
          Or <a>register now!</a>
        </FormItem>
      </Form>
    </div>
  </div>
    }
    </div>);
  },
}));

export default AdminLogin