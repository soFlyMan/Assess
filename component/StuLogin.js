import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router';

const FormItem = Form.Item;

const StuLogin = Form.create()(React.createClass({
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
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入学号！' }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="请输入学号！" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码！' }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码！" />
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
    );
  },
}));

export default StuLogin
