import React,{ Component } from 'react';
import { Menu, Icon, Switch } from 'antd';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;

const Admin = React.createClass({
  getInitialState() {
    return {
      theme: 'dark',
      username:'管理员'
    };
  },
  changeTheme(value) {
    this.setState({
      theme: value ? 'light' : 'dark',
    });
  },
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    return (
      <div>
      <div id="menu">
        <Switch onChange={this.changeTheme} checkedChildren="Light" unCheckedChildren="Dark" />
        <br />
        <br />
        <Menu theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 240 ,height:'100%'}}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="team" /><span>用户管理</span></span>}>
            <Menu.Item key="1"><Link to="/admin/userinfo">用户信息</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/admin/userlist">用户列表</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="4">管理员信息</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="switcher" /><span>试题库管理</span></span>}>
            <Menu.Item key="5">单选题管理</Menu.Item>
            <Menu.Item key="6">多选题管理</Menu.Item>
            <Menu.Item key="7">是非题管理</Menu.Item>
            <Menu.Item key="8">单填空题管理</Menu.Item>
            <Menu.Item key="13">编程题管理</Menu.Item>
            <Menu.Item key="14">改错题管理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="file" /><span>考试管理</span></span>}>
            <Menu.Item key="9">考试参数设置</Menu.Item>
            <Menu.Item key="10">组卷参数设置</Menu.Item>
            <Menu.Item key="11">预组卷管理</Menu.Item>
            <Menu.Item key="12">在线用户监控</Menu.Item>
          </SubMenu>
        </Menu>
        </div>
        <div id="rightWrap">
          <div id="rightWrap-nav">
            <Menu mode="horizontal">
                <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                  <Menu.Item key="setting:1"><Link to="adminlogin"><Icon type="logout" />退出</Link></Menu.Item>                
                </SubMenu>
            </Menu>
          </div>
          <div className="right-box">
              { this.props.children }
          </div>
        </div>
      </div>
    );
  },
});

export default Admin