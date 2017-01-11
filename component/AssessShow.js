import React,{ Component } from 'react';
import { Card, Row, Col, Table, Input, Button, message } from 'antd';
import { Link } from 'react-router'; 

// const data = [{
//   key: '1',
//   coursename: 'ReactJS',
//   date: 32,
//   result: 98,
// }, {
//   key: '2',
//   coursename: 'NodeJS',
//   date: 42,
//   result: 98,
// }, {
//   key: '3',
//   coursename: 'java程序设计',
//   date: 32,
//   result: 98,
// }, {
//   key: '4',
//   coursename: 'ReactJS',
//   date: 32,
//   result: 98,
// }]

export default class AssessShow extends Component{
	constructor(props){
		super(props)
		this.state = {
		 	filterDropdownVisible: false,
	        data:[],
	        searchText: '',
	        userid: ''
		}
	}
	onInputChange(e) {
    this.setState({ searchText: e.target.value })
    } 
    onSearch() {
	    const { searchText } = this.state
	    const reg = new RegExp(searchText, 'gi')
	    this.setState({
	      filterDropdownVisible: false,
	      data: data.map((record) => {
	        const match = record.name.match(reg);
	        if (!match) {
	          return null;
	        }
	        return {
	          ...record,
	          name: (
	            <span>
	              {record.name.split(reg).map((text, i) => (
	                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
	              ))}
	            </span>
	          ),
	        };
	      }).filter(record => !!record),
	    })
	}
	shouldComponentUpdate=()=>{
		return this.state.userid != this.props.userid
	}
	componentWillUpdate=()=>{
		var user = {
			userid : this.props.userid
		}
		console.log(user)
		var _self = this
		var req = new Request('/exam/result',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		fetch(req).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					_self.setState({
						data: data,
						userid: _self.props.userid
					})
				})
			}
		})
	}
	handleMessage(){
		message.info("尚未开启！")
	}
	render(){
		const columns = [{
      title: '课程名称',
      dataIndex: 'coursename',
      key: 'course',
      filterDropdown: (
        <div className="custom-filter-dropdown">
          <Input
            placeholder="Search name"
            value={this.state.searchText}
            onChange={this.onInputChange}
            onPressEnter={this.onSearch}
          />
          <Button type="primary" onClick={this.onSearch}>Search</Button>
        </div>
      ),
      filterDropdownVisible: this.state.filterDropdownVisible,
      onFilterDropdownVisibleChange: visible => this.setState({ filterDropdownVisible: visible }),
		    }, {
		      title: '日期',
		      dataIndex: 'date',
		      key: 'date',
		    }, {
		      title: '成绩',
		      dataIndex: 'result',
		      key: 'result',
		    }]
		return (
		<div>
			<div style={{ background: '#ECECEC', padding: '30px 80px' }}>
			    <Card title="网络课程列表" bordered={false} style={{ width: "100%",height:"400px" }}>
			      <div style={{padding:30}}>
				    <Row>
				    	<Col span='8'>
					    	<Link to="/course">
					    		<Card title="java程序设计" bordered={false} className="card">
					    		<p>You can learn java at here !</p>
					    		</Card>
				    		</Link>
				    	</Col>
				    	<Col span='8'>
				    		<a>
					    		<Card title="ReactJS" bordered={false} className="card" onClick={this.handleMessage}>
					    		<p>React is a great front-end framework maintained by Facebook !</p>
					    		</Card>
				    		</a>
				    	</Col>
				    	<Col span='8'>
				    		<a>
				    		 <Link to="/admin">
					    		<Card title="NodeJS" bordered={false} className="card" onClick={this.handleMessage}>
					    		<p>Nodejs is an open-source,cross-platform,
					    		javascriot runtime environment .
					    		It is built on the top of the Googles Chrom V8 VM engine .</p>
					    		</Card>
				    		 </Link>
				    		</a>
				    	</Col>
				    </Row>
			      </div>
			    </Card>
  			</div>
			<div style={{margin:"30px 80px"}}>
				<Card title="成绩查询" style={{width:"100%"}} 
				extra={<span><Link to="showscore">考试安排</Link></span>}>
					<p>&nbsp;你的成绩单</p>
					<Table columns={columns} dataSource={this.state.data} />
				</Card>
			</div>
		</div>
			)
	}
} 

