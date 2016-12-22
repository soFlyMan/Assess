import React from 'react';
import { Modal, Button } from 'antd';

import StuLogin from './StuLogin.js';

const LoginModal = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('Clicked OK');
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Button type="default" onClick={this.showModal}>登陆</Button>
        <Modal title="请登陆!" okText="登陆" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <StuLogin handleOk={this.handleOk}/>
        </Modal>
      
      </div>
    );
  },
});

export default LoginModal