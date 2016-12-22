import React,{ Component } from 'react'
import { Link } from 'react-router'
import { Card } from 'antd' 

export default class Test extends Component{
	constructor(props){
		super(props)
		this.state={
			username:'123'
		}
	}
	componentWillMount(){
		var self=this
		fetch('/test').then(function(res){
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
	}
	render(){
		return (
			<Card title="考试" style={{ width: "80%" ,height:800,margin:"0 auto"}}>
				<p>{this.state.username}</p>
			</Card>
			)
	}
}
