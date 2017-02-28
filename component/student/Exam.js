import React,{ Component } from 'react'
import { Link } from 'react-router'
import { Card, Icon, notification } from 'antd' 


const openNotification = () => {
  notification.open({
    message: '考试时间',
    description: '你还剩余15分钟！',
  });
}

export default class Exam extends Component{
	constructor(props){
		super(props)
		this.state={
			username: '123',
			time: 100*60
		}
	}
	changeTime = () => {
		this.setState({
			time: this.state.time-1
		})
	}
	interval = () => {
		var self = this
		var val = window.setInterval(self.changeTime,1000)
	}
	componentDidMount(){
		var self=this
		fetch('/exam',{
			method: 'GET',
			credentials: 'same-origin',
		}).then(function(res){
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
		self.interval()
		setTimeout(()=>{
			openNotification()
		},15*60*1000)
	}
	render(){
		return (
			<div>
				<Card title={this.state.username} style={{ marginLeft: 280, marginRight: 280}}
				extra={(<span>考试时间：{this.state.time}s</span>)}>
					{this.props.children}
				</Card>
				<p></p>
			</div>
			)
	}
}
