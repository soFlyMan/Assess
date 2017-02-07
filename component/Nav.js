import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logOut, fetchLoginStatus } from '../redux/actions/stuActions.js'

import LoginModal from './LoginModal.js'

// var logo = require('../assets/images/Assesslogo.png')
var logo = require('../dist/f3919c9c277024f91197317ae56e87d2.png')

class Nav extends Component{
	componentWillMount(){
		const { dispatch } = this.props
		
		dispatch(fetchLoginStatus('/logStatus',{
			method: 'GET',
			credentials: 'same-origin'
		}))
	}
	render(){
		const { fetchingLoginStatus, status, dispatch } = this.props
		return (
			<nav className={this.props.nav}>
				<ul style={{padding: '0 5%'}}>
					<li style={{fontSize:40,float:'left',marginLeft:8}}>
						<Link to="/" style={{color:"#777"}}>
							<img height="60" width="80" src={logo}/>
						</Link>
					</li>
					<li style={{float:'right'}}>
						<LoginModal status={status}
									username={fetchingLoginStatus.data.username}
									userid={fetchingLoginStatus.data.userid}
									onLogOut={(url,params)=>dispatch(logOut(url,params))}
									onFetchLoginStatus={(url,params)=>dispatch(fetchLoginStatus(url,params))}/>
					</li>
				</ul>
			</nav>
			)
	}
}

const mapStateToProps = state => {
	return {
	fetchingLoginStatus: state.fetchingLoginStatus,
	status: state.fetchingLoginStatus.status
	}
}
export default connect(mapStateToProps)(Nav)