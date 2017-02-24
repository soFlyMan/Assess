import React from 'react';
import ReactDOM from 'react-dom';
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
      imageUrl:''
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
    this.props.onLogOut('/logout',{
      method: 'GET',
      credentials: 'same-origin'
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
        this.props.status?
        <ul className="user">
         
          <li>
            <Menu mode="horizontal" 
                  onClick={this.handleClick}
                  style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
             <SubMenu title={<span style={{color: "#777"}}>{this.props.username}<Icon type="down" /></span>}>
                <Menu.Item key="1"><span><Link to="/userinfocontainer"><Icon type="file-text"/>个人信息</Link></span></Menu.Item>
                <Menu.Item key="2"><span><Icon type="mail"/>历史消息</span></Menu.Item>
                <Menu.Item key="3"><span onClick={this.logOut.bind(this)}><Link to="/"><Icon type="logout"/>退出</Link></span></Menu.Item>
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