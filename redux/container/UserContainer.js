import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserList from '../../component/admin/user/UserList.js'
import { fetchSingleUser } from '../actions/userActions.js'

class UserContainer extends Component{
	render(){
		const { dispatch } = this.props
		return (
			<UserList fetchSingleUser={(url,params)=>dispatch(fetchSingleUser(url,params))}/>
			)
	}
}

export default connect()(UserContainer)