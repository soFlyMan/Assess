import React from 'react';
import ReactDOM from 'react-dom';
import { message, Form, Icon, Input, Checkbox, Modal, Button, Menu, Upload } from 'antd';
import { Link } from 'react-router';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
      username: '',
      userid: this.props.userid,
      password:'' ,
      visible: false,
      loginstatus: this.props.loginstatus,
      imageUrl:''
       };
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
            userid: this.state.userid,
            password: this.state.password
          })
        })
        fetch(req).then(function(res){
          if(res.ok){
            res.json().then(function(data){
              console.log(JSON.stringify(data))
              if(data.status==1){
                console.log(data.username)
                _self.setState({
                  username: data.username,
                  visible: false,
                  loginstatus: true,
              })
                var val = data.userid
                _self.props.handleUserid(val)

              }else if(data.status==2){
                message.info('Password is error !')
              }else{
                message.info('Userid is error!')
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
  handleChange(info){
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
    }
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    const imageUrl = this.state.imageUrl;
    return (
      <div>
      { 
        this.state.loginstatus?
        <ul className="user">
          <li>
            <Upload
              className="avatar-uploader"
              name="avatar"
              showUploadList={false}
              action="/upload.do"
              beforeUpload={beforeUpload}
              onChange={this.handleChange}
            >
              {
                imageUrl ?
                  <img src={imageUrl} alt="" className="avatar" /> :
                  <Icon type="plus" className="avatar-uploader-trigger" />
              }
            </Upload>
          </li>
          <li className="username"><Link to="/"><span style={{color: "#777"}} onClick={this.logOut} >{this.state.username}</span></Link></li>
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