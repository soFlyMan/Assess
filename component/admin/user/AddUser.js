import React from 'react'
import { Modal,Button, Input, Form, message } from 'antd';

const FormItem = Form.Item;

const AddUser = Form.create()(React.createClass({
  getInitialState() {
    return {
      ModalText: 'Content of the modal dialog',
      visible: false,
      passwordDirty: false,
      username: '',
      password: '',
      userid:'',
      class:'',
    };
  },
  showModal() {
    this.setState({
      visible: true,
    });
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
  handleUserid(e){
    this.setState({
      userid: e.target.value
    })
  },
  handleClass(e){
    this.setState({
      class: e.target.value
    })
  },
  handleOk() {
    console.log(this.state.username)
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true,
    });
    var _self = this
    var user = {
      username: this.state.username,
      password: this.state.password,
      userid: this.state.userid,
      class: this.state.class
    }
    console.log(user)
    var req = new Request('/signup',{
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
        fetch(req).then(function(res){
          if(res.ok){
            res.json().then(function(data){
              _self.setState({
                visible: false,
                confirmLoading: false,
              })
                var val = _self.state.username
                _self.props.handleRender(val);
                message.info("添加成功！")
            })
          }
            message.info("添加失败！")
        }).catch(function(err){
          console.log("err"+err.message)
        })
  },
  handleCancel() {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
      confirmLoading: false
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  },
  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  },
  checkPassowrd(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  },
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
        <Button type="default" onClick={this.showModal} style={{height:30}}>添加用户</Button>
        <Modal title="添加用户"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="姓名"
              hasFeedback
            >
              {getFieldDecorator('username', {
                rules: [{
                  required: true, message: '请输入姓名!',
                }],
              })(
                <Input onChange={this.handleUsername}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="密码"
              hasFeedback
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password" onBlur={this.handlePasswordBlur} onChange={this.handlePassword}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="确认密码"
              hasFeedback
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.checkPassowrd,
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  学号
                </span>
              )}
              hasFeedback
            >
              {getFieldDecorator('userid', {
                rules: [{ required: true, message: 'Please input userid!' }],
              })(
                <Input onChange={this.handleUserid}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  班级
                </span>
              )}
              hasFeedback
            >
              {getFieldDecorator('class', {
                rules: [{ required: true, message: 'Please input class!' }],
              })(
                <Input onChange={this.handleClass}/>
              )}
            </FormItem>
            
          </Form>

        </Modal>
      </div>
    );
  },
}));

export default AddUser