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
			userid: ''
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
	render(){
		return (
			<div style={{marginBottom:180}} onWheel={this.handleScorll.bind(this)}>
			<div>
				<nav className={this.state.nav}>
					<ul style={{padding: '0 5%'}}>
						<li style={{fontSize:40,float:'left',marginLeft:8}}><Link to="/" style={{color:"#777"}}><img height="60" width="80" src="./logo"/></Link></li>
						<li style={{float:'right',padding:15}}><LoginModal handleUserid={this.handleUserid} /></li>
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