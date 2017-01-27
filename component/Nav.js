import React, { Component } from 'react'
import { Link } from 'react-router'

import LoginModal from './LoginModal.js'

var logo = require('../assets/images/Assesslogo.png')

class Nav extends Component{
	render(){
		const { fetchingLoginStatus, onLogOut, onFetchLoginStatus } = this.props
		return (
			<nav className={this.props.nav}>
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
									onLogOut={onLogOut}
									onFetchLoginStatus={onFetchLoginStatus}/>
					</li>
				</ul>
			</nav>
			)
	}
}

export default Nav