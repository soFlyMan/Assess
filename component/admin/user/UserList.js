import React from 'react';
import { Table, Button,Card } from 'antd';
import AddUser from './AddUser'

const columns = [{
  title: '姓名',
  dataIndex: 'username',
}, {
  title: '密码',
  dataIndex: 'password',
},{
  title:'学号',
  dataIndex:'userid'
}, 
{
  title: '班级',
  dataIndex: 'class',
}];

const data = [];
for (let i = 0; i < 12; i++) {
  data.push({
    key: i,
    username: `Edward King ${i}`,
    password: 32,
    userid: `201306100402${i}`,
    class: `London, Park Lane no. ${i}`,
  });
}

const UserList = React.createClass({
  getInitialState() {
    return {
      selectedRowKeys: [],  // Check here to configure the default column
      loading: false,
      userlist:[]
    };
  },
  start() {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  },
  onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  },
  componentWillMount(){
    var req = new Request('/userlist',{
      method: 'GET',
    });
    var _self = this;
    fetch(req).then(function(res){
      if(res.ok){
        res.json().then(function(data){
          _self.setState({
            userlist: data
          })
        })
      }
    }).catch(function(err){
      console.log(err.message);
    })

  },
  render() {
    const { loading, selectedRowKeys,userlist } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <Card title="用户列表" extra={<AddUser />}>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start}
            disabled={!hasSelected} loading={loading}
          >Reload</Button>
          <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={userlist} />
      </Card>
    );
  },
});

export default UserList