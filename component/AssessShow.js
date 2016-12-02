import React,{ Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router'; 

export default class AssessShow extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
		<div>
			<div style={{margin:"30px 80px"}}>
				<Card title="你可以在这里查询你的成绩！" style={{width:"100%",height:"300px"}}>
					<p><Link to="assess/showscore">查询</Link></p>
					<div>
						{this.props.children}
					</div>
				</Card>
			</div>
			<div style={{ background: '#ECECEC', padding: '30px 80px' }}>
			    <Card title="Card title" bordered={false} style={{ width: "100%",height:"300px" }}>
			      <p>Card content</p>
			      <p>Card content</p>
			      <p>Card content</p>
			    </Card>
  			</div>
  			<div style={{height:500}}>
  			</div>
		</div>
			)
	}
} 

