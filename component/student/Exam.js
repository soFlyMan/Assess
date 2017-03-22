import React,{ Component } from 'react'
import { Link } from 'react-router'
import { Card, Icon, notification, message} from 'antd'


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
			minute: this.props.minute||0,
			second: 0
		}
	}
	interval = () => {
		var self = this
		var val = setInterval(function(){
			if(self.state.second==0){
				self.setState({
				second: 59,
				minute: self.state.minute-1
				})
			}else if(self.state.minute==0&&self.state.second==0){
				clearInterval(val)
        message.warning('考试时间到，自动提交试卷！')
        window.location.href='/#/referpapercontainer'
				//考试时间到！
			}else if(self.state.minute==14&&self.state.second==59){
				//考试提醒，你还剩余15分钟
				self.setState({
					second: self.state.second-1
				})
				openNotification()
			}else{
				self.setState({
					second: self.state.second-1
				})
			}
		},1000)
	}
	componentDidMount(){
		var self=this
    const { examOver } = this.props
    if(!examOver){
      self.interval()
    }
		// fetch('/exam',{
		// 	method: 'GET',
		// 	credentials: 'same-origin',
		// }).then(function(res){
		// 	if(res.ok){
		// 		res.json().then(function(data){
		// 			self.setState({
		// 				username:data.username
		// 			})
		// 		})
		// 	}
		// }).catch(function(err){
		// 	console.log('fetch err'+err)
		// })
		// console.log('1')
		// self.interval()
		// setTimeout(()=>{
		// 	openNotification()
		// },a)
	}
	render(){
		return (
			<div>
				<Card title={this.props.username||'123'} style={{ marginLeft: 280, marginRight: 280}}
				extra={(<span>剩余时间：{this.state.minute}分{this.state.second}秒</span>)}>
					{this.props.children}
				</Card>
				<p></p>
			</div>
			)
	}
}
