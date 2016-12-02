import React from 'react';
import { Link } from 'react-router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Mock from 'mockjs';

const FormItem = Form.Item;

const AdminLogin = Form.create()(React.createClass({
  getInitialState(){
    return {
      AdminName:'',
      AdminPwd:''
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
  <div id="admincontainer">
    <div id="adminlogin">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
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
          Or <a><Link to="/admin">register now!</Link></a>
        </FormItem>
      </Form>
    </div>
  </div>
    );
  },
}));

export default AdminLogin