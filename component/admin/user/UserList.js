import React from 'react';
import { Table, Button, Card, message, Popconfirm } from 'antd';
import { Link } from 'react-router'
import AddUser from './AddUser'

const UserList = React.createClass({
  getInitialState() {
    return {
      selectedRowKeys: [],  // Check here to configure the default column
      loading: false,
      userlist:[],
      reRender: false,
      username:''
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
  componentDidMount(){
    console.log(this.props.test)
    this.handleRender();

  },
  handleRender(val){
    var req = new Request('/userlist',{
      method: 'GET',,
      credentials: 'same-origin',
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
  handleDel(record){
    const _self = this
    const user = {
      userid: record.userid
    }
    const req = new Request('/admin/userDel',{
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    fetch(req).then(function(res){
      if(res.ok){
        res.json().then(function(data){
          if(data.status==1){
            message.success('删除成功！')
            _self.handleRender()
          }else{
            message.error('删除失败')
          }
        })
      }
    }).catch(function(err){
      console.log(err.message)
    })
  },
  handleSingele(record){
      const userId = {
        id: record._id
      }
      console.log('12312312312')
      console.log(this.props.test)
      console.log(this.props.fetchingSingleUser)
      this.props.onFetchSingle(`/${record._id}`,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userId)
      })
  },
  render() {
    const columns = [{
          title: '姓名',
          dataIndex: 'username',
        },{
          title:'学号',
          dataIndex:'userid'
        }, 
        {
          title: '班级',
          dataIndex: 'class',
        },{
          title: '操作',
          dataIndex: 'handle',
          render: (text,record)=>{
            return (
            <span>
              <a onClick={()=>this.handleSingele(record)}><Link to="/admin/singleusercontainer">查看</Link></a>
              <span className="ant-divider" />
              <Popconfirm title="确定要删除?"  
              onConfirm={()=>this.handleDel(record)} okText="确定" cancelText="取消">
                <a>删除</a>
              </Popconfirm>
            </span>
            )
          }
}];
    const { loading, selectedRowKeys,userlist } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <Card title="学生列表" style={{minHeight:500}} extra={<AddUser handleRender={this.handleRender}/>}>
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
