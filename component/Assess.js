import React,{ Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { Button } from 'antd';

import { fetchParams } from '../redux/actions/actions.js'
import { fetchLoginStatus, logOut } from '../redux/actions/stuActions.js'
import LoginModal from './LoginModal.js';
import AssessShow from './AssessShow.js';

var logo = require('../assets/images/Assesslogo.png')


class Assess extends Component{
	constructor(props){
		super(props);
		this.state={
			nav:'assessNav',
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
	componentDidMount=()=>{
		const { dispatch, fetchingLoginStatus } = this.props

		dispatch(fetchLoginStatus('/logStatus'),{
			method: 'GET'
		})
		dispatch(fetchParams('/exam/params'),{
			method: 'GET'
		})
	}
	render(){
		const { fetchingParams, fetchingLoginStatus, dispatch }  = this.props
		const exam = (fetchingParams) => {
			if(fetchingParams.data.limit=="禁止考试"){
				return (
					<Button disabled>暂无考试</Button>
					)
			}else{
				return (
					<Button type="primary"><Link to="/examcontainer">开始考试</Link></Button>
				)
			}
		}
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
						<li style={{float:'right'}}>
							<LoginModal loginstatus={fetchingLoginStatus.fetched}
										username={fetchingLoginStatus.data.username}
										userid={fetchingLoginStatus.data.userid}
										onLogOut={(url,params) =>dispatch(logOut(url,params))}/>
						</li>
					</ul>
				</nav>
				<div id="navImg">
			</div>
				<div style={{width:"20%",height:100,padding:40,margin:"0 auto"}}>
					{exam(fetchingParams)}
				</div>
					<AssessShow userid={fetchingLoginStatus.data.userid}/>
				<div>
					{this.props.children}
				</div>
			</div>
			
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		fetchingParams: state.fetchingParams,
		fetchingLoginStatus: state.fetchingLoginStatus
	}
}

export default connect(mapStateToProps)(Assess)