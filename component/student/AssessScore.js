import React,{ Component } from 'react';
import { Spin, Alert, Card } from 'antd';

export default class AssessScore extends Component{
	constructor(props){
		super(props);
		this.state={loading:true};
	}
	render(){
		const coontainer=(
			<Alert message="Assess" description="正在查询中，请稍后……"
        type="info"/>
			)
		return (
			<div  style={{padding: '30px 80px'}}>
				<Card title="考试安排">
					<Spin spinning={this.state.loading} tip="加载中…">{coontainer}</Spin>
				</Card>
			</div>
			)
	}
}