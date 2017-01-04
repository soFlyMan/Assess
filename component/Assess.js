import React,{ Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';

import LoginModal from './LoginModal.js';
import AssessShow from './AssessShow.js';

var logo = require('../assets/images/Assesslogo.png')


class Assess extends Component{
	constructor(props){
		super(props);
		this.state={
			nav:'assessNav',
			userid: '',
			username: '',
			loginstatus: false
		};
	}
	handleScorll(e){
		if(document.body.scrollTop>0){
				this.setState({nav:'assessNavChange'});
		}else{
			this.setState({nav:'assessNav'});

		}
	}
	handleUserid=(val)=>{
		this.setState({
			userid: val
		})
	}
	componentWillMount=()=>{
		console.log('123')
		var _self = this
		var req = new Request('/logStatus',{
			method: 'GET'
		})
		fetch(req).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					if(data.userid){
						console.log('已是登录状态')
						console.log(data)
						_self.setState({
							userid: data.userid,
							username: data.username,
							loginstatus: true
						})
					}else{
						console.log('用户未登录')
					}
				})
			}
		})
	}
	render(){
		return (
			<div style={{marginBottom:180}} onWheel={this.handleScorll.bind(this)}>
			<div>
				<nav className={this.state.nav}>
					<ul style={{padding: '0 5%'}}>
						<li style={{fontSize:40,float:'left',marginLeft:8}}>
							<Link to="/" style={{color:"#777"}}>
								<img height="60" width="80" src="./logo"/>
							</Link>
						</li>
						<li style={{float:'right',padding:15}}>
							<LoginModal handleUserid={this.handleUserid} 
										loginstatus={this.state.loginstatus}
										username={this.state.username}/>
						</li>
					</ul>
				</nav>
				<div id="navImg">
			</div>
				<div style={{width:"20%",height:100,padding:40,margin:"0 auto"}}>
					<Button type="primary"><Link to="/test" >开始考试</Link></Button>
				</div>
					<AssessShow userid={this.state.userid}/>
				<div>
					{this.props.children}
				</div>
			</div>
			
			</div>
			)
	}
}
export default Assess