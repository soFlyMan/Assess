import React,{ Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router';

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
	componentWillMount(){
		var user = {
          username: 'soFly'+Math.random(),
          password: '123',
          userid: 100
        }
        var req = new Request('/signup',{
          method: 'POST',
          headers: {
          	"Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        })
        console.log(req.context)
        fetch(req).then(function(res){
        	console.log(req)
          if(res.ok){
          	console.log(req.context)
            res.json().then(function(data){
            	console.log(JSON.stringify(data))
            })
          }
        }).catch(function(err){
          console.log("err"+err.message)
        })
	}
	render(){
		return (
			<div style={{height:1000}} onWheel={this.handleScorll.bind(this)}>
			<div>
				<nav className={this.state.nav}>
					<ul>
						<li style={{fontSize:40,float:'left'}}><Link to="/" style={{color:"#777"}}>Assess</Link></li>
						<li style={{float:'right',padding:15}}><LoginModal /></li>
					</ul>
				</nav>
				<div id="navImg">
				</div>
				<div style={{width:"20%",height:100,padding:40,margin:"0 auto"}}>
					<Button type="primary"><Link to="/test">开始考试</Link></Button>
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