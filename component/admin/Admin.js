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
          <SubMenu key="sub1" title={<span><Icon type="book" /><span>教学内容管理</span></span>}>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>java程序设计</span></span>}>
                <Menu.Item key="1"><Link to="/admin/section"><span>章节管理</span></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/admin/download"><span>下载区管</span>理</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>react教学</span></span>}>
                <Menu.Item key="3"><Link to="/admin/section"><span>章节管理</span></Link></Menu.Item>
                <Menu.Item key="4"><Link to="/admin/download"><span>下载区管</span>理</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>nodeJS</span></span>}>
                <Menu.Item key="5"><Link to="/admin/section"><span>章节管理</span></Link></Menu.Item>
                <Menu.Item key="6"><Link to="/admin/download"><span>下载区管</span>理</Link></Menu.Item>
              </SubMenu>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="team" /><span>用户管理</span></span>}>
              <Menu.Item key="7"><Link to="/admin/classadmin"><span>班级管理</span></Link></Menu.Item>
              <Menu.Item key="8"><Link to="/admin/userlist"><span>学生管理</span></Link></Menu.Item>
              <Menu.Item key="9"><Link to="/"><span>批量创建</span>用户</Link></Menu.Item>
              <Menu.Item key="10"><span>管理员信息</span></Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title={<span><Icon type="switcher" /><span>试题库管理</span></span>}>
              <Menu.Item key="11"><Link to="/admin/radiocontainer"><span>单选题管理</span></Link></Menu.Item>
              <Menu.Item key="12"><Link to="/admin/multicontainer"><span>多选题管理</span></Link></Menu.Item>
              <Menu.Item key="13"><Link to="/admin/judgecontainer"><span>是非题管理</span></Link></Menu.Item>
              <Menu.Item key="14"><Link to="/admin/fillblankcontainer"><span>单填空题管理</span></Link></Menu.Item>
              <Menu.Item key="15"><Link to="/admin/programmingcontainer"><span>编程题管理</span></Link></Menu.Item>
              <Menu.Item key="16"><Link to="/admin/correctcontainer"><span>改错题管理</span></Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub7" title={<span><Icon type="file" /><span>考试管理</span></span>}>
              <Menu.Item key="17"><Link to="/admin/examparamcontainer"><span>考试参数设置</span></Link></Menu.Item>
              <Menu.Item key="18"><Link to="/admin/examparamcontainer"><span>组卷参数设置</span></Link></Menu.Item>
              <Menu.Item key="19"><Link to="/admin/examparamcontainer"><span>预组卷管理</span></Link></Menu.Item>
              <Menu.Item key="24"><Link to="/admin/examparamcontainer"><span>在线用户监控</span></Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub8" title={<span><Icon type="area-chart" /><span>考试分析</span></span>}>
              <Menu.Item key="20"><span>全班成绩</span>分析</Menu.Item>
              <Menu.Item key="21"><span>解答统计</span>分析</Menu.Item>
              <Menu.Item key="22"><span>查阅答卷</span></Menu.Item>
              <Menu.Item key="23"><span>某班历史</span>成绩</Menu.Item>
          </SubMenu>
        </Menu>
        </div>
        <div id="rightWrap">
          <div id="rightWrap-nav">
            <Menu mode="horizontal">
                <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                  <Menu.Item key="setting:1"><Link to="/"><Icon type="logout" />退出</Link></Menu.Item>                
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