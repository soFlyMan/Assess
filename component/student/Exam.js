import React,{ Component } from 'react'
import { Link } from 'react-router'
import { Card, Icon, notification } from 'antd' 


const openNotification = () => {
  notification.open({
    message: '考试时间',
    description: '你还剩余30分钟！',
  });
}

export default class Exam extends Component{
	constructor(props){
		super(props)
		this.state={
			username:'123'
		}
	}
	componentDidMount(){
		var self=this
		fetch('/exam').then(function(res){
			if(res.ok){
				res.json().then(function(data){
					self.setState({
						username:data.username
					})
				})
			}
		}).catch(function(err){
			console.log('fetch err'+err)
		})
		console.log('1')
		setTimeout(()=>{
			openNotification()
		},2000)
	}
	render(){
		return (
			<div>
				<Card title="考试" style={{ width: "80%" ,height:800,margin:"0 auto"}}>
					<p>{this.state.username}</p>
				</Card>
				<p></p>
			</div>
			)
	}
}
