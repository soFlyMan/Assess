import React,{ Component } from 'react';
import { DatePicker } from 'antd';

import LoginModal from './LoginModal.js';


class Assess extends Component{
	constructor(props){
		super(props);
		this.state={nav:'assessNav'};
	}
	handleScorll(e){
		if(e.deltaY>0){
		this.setState({nav:'assessNavChange'});
	}else{
		this.setState({nav:'assessNav'});

	}
	}
	render(){
		return (
			<div style={{height:1000}} onWheel={this.handleScorll.bind(this)}>
			<div>
				<nav className={this.state.nav}>
					<ul>
						<li style={{fontSize:40,float:'left'}}>Assess</li>
						<li style={{float:'right',padding:15}}><LoginModal /></li>
					</ul>
				</nav>
				<div id="navImg">
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
			
			</div>
			)
	}
}
export default Assess