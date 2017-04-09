import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { message, Form, Icon, Input, Checkbox, Modal, Button, Menu, Upload, Dropdown } from 'antd';
import { Link } from 'react-router';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

          // <li>
          //   <Upload
          //     className="avatar-uploader"
          //     name="avatar"
          //     showUploadList={false}
          //     action="/upload.do"
          //     beforeUpload={beforeUpload}
          //     onChange={this.handleChange}
          //   >
          //     {
          //       imageUrl ?
          //         <img src={imageUrl} alt="" className="avatar" /> :
          //         <Icon type="plus" className="avatar-uploader-trigger" />
          //     }
          //   </Upload>
          // </li>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  if (!isJPG) {
    message.error('You can only upload JPG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJPG && isLt2M;
}

const LoginModal = Form.create()(React.createClass({
  getInitialState() {
    return {
      id: '',
      current: '',
      username: '',
      userid: '',
      password:'' ,
      visible: false,
      imageUrl:'',
      changePassVisible: false,
      cpassword: '',
      oripassword: '',
      confirmpassword:''
       };
  },
  handleClick(e){
    console.log(e)
    this.setState({
      current: e.key
    })
  },
  handleUsername(e){
    this.setState({
      userid: e.target.value
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
  showChangePassModal() {
    this.setState({
      changePassVisible: true
    });
  },
  handleChangePassOk() {
    if(this.state.oripassword==''){
      message.info('请输入初始密码！')
      return false
    }else if(this.state.cpassword==''){
      message.info('请输入新的密码！')
      return false
    }else if(this.state.confirmpassword==''){
      message.info('请确认新的密码！')
      return false
    }
    const { id } = this.props
    const self = this
    const info = {
      id: id,
      oripassword: this.state.oripassword,
      cpassword: this.state.cpassword
    }
    this.setState({
      confirmLoading: true
    })
    fetch('/user/changePassword',{
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
            self.setState({
              confirmLoading: false,
              changePassVisible: false
            })
            message.success('修改成功！')
          }else if(data.status==0){
            self.setState({
              confirmLoading: false,
            })
            message.warning('初始密码错误！')
          }else{
            self.setState({
              confirmLoading: false,
            })
            message.error('修改失败！')
          }
        })
      }
    }).catch(function(err){
      console.log(err.message)
    })
  },
  handleOk() {
    const { onFetchLoginStatus } = this.props
    var _self = this
    var req = new Request('/signin',{
          method: 'POST',
          credentials: 'same-origin',
          headers: {
                    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                    'Content-Type': 'application/json'
                    },
          body: JSON.stringify({
            userid: this.state.userid,
            password: this.state.password
          })
        })
        fetch(req).then(function(res){
          if(res.ok){
            res.json().then(function(data){
              console.log(JSON.stringify(data))
              if(data.status==1){
                _self.setState({
                  username: data.username,
                  id: data._id,
                  visible: false,
              })
                onFetchLoginStatus('/logStatus',{
                  method: 'GET',
                  credentials: 'same-origin'
                })
                window.location.href='/'
              }else if(data.status==2){
                message.warning('Password is error !')
              }else{
                message.warning('Userid is error!')
              }

            })
            }
        }).catch(function(err){
          console.log("err"+err.message)
        })
  },
  handleChangePassCancel(){
    this.setState({
      changePassVisible: false
    })
  },
  oriPassword(e){
    this.setState({
      oripassword: e.target.value
    })
  },
  cPassword(e){
    this.setState({
      cpassword: e.target.value
    })
  },
  conPassword(e){
    this.setState({
      confirmpassword: e.target.value
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
    this.props.onLogOut('/logout',{
      method: 'GET',
      credentials: 'same-origin'
    })
    window.location.href='/'

  },
  handleChange(info){
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  },
  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  },
  checkPassowrd(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('changePassword')) {
      callback('两次输入的密码不匹配！');
    } else {
      callback();
    }
  },
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirmPassword'], { force: true });
    }
    callback();
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    const imageUrl = this.state.imageUrl;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
      {
        this.props.status?
        <ul className="user">

          <li>
            <Menu mode="horizontal"
                  onClick={this.handleClick}
                  style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
             <SubMenu title={<span style={{color: "#777"}}>{this.props.username}<Icon type="down" /></span>}>
                <Menu.Item key="1"><span><Link to="/userinfocontainer"><Icon type="file-text"/>个人信息</Link></span></Menu.Item>
                <Menu.Item key="2"><span onClick={this.showChangePassModal}><Icon type="lock"/>修改密码</span></Menu.Item>
                <Menu.Item key="4"><span onClick={this.logOut.bind(this)}><Link to="/"><Icon type="logout"/>退出</Link></span></Menu.Item>
             </SubMenu>
            </Menu>
          </li>
        </ul>
        :
        <div style={{padding: 15}}>
          <Button type="default" onClick={this.showModal}><Icon type="user" />登陆</Button>
        </div>
      }
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
              <br/>
              <p><Link to="/adminlogin">管理员登陆</Link></p>
              <p style={{color:'#ccc'}}>提示：初始密码为学号，登陆后请修改密码。</p>
            </FormItem>
          </Form>
        </Modal>
        <Modal title="修改密码"
          visible={this.state.changePassVisible}
          onOk={this.handleChangePassOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleChangePassCancel}
        >
          <Form>
            <FormItem
              {...formItemLayout}
              label="初始密码"
              hasFeedback
            >
              {getFieldDecorator('oriPassword', {
                rules: [{
                  required: true, message: '请输入初始密码!',
                }],
              })(
                <Input type="password" onChange={this.oriPassword}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="新的密码"
              hasFeedback
            >
              {getFieldDecorator('changePassword', {
                rules: [{
                  required: true, message: '请输入新的密码!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password" onBlur={this.handlePasswordBlur} onChange={this.cPassword}/>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="确认密码"
              hasFeedback
            >
              {getFieldDecorator('confirmPassword', {
                rules: [{
                  required: true, message: '请确认你的密码!',
                }, {
                  validator: this.checkPassowrd,
                }],
              })(
                <Input type="password" onChange={this.conPassword}/>
              )}
            </FormItem>
          </Form>
        </Modal>

      </div>
    );
  },
}));

const mapStateToProps = state => {
  return {
    id: state.fetchingLoginStatus.data.id
  }
};
export default connect(mapStateToProps)(LoginModal)
