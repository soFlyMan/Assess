import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'

import { fetchUserInfo } from '../actions/stuActions.js'

import Nav from '../../component/Nav.js'
import SingleUser from '../../component/admin/user/SingleUser.js'

class UserInfoContainer extends Component{
	componentDidMount(){
		const { dispatch, id } = this.props
		dispatch(fetchUserInfo(`/user/${id}`,{
			method: 'POST',
			credentials: 'same-origin'
		}))
	}
	render(){
		const { fetched,singleUser } = this.props
		return (
			<div>
				<Nav nav={'assessNavChange'}/>
				<Card style={{marginTop: 100, marginRight: 280, marginLeft: 280}}>
					<SingleUser fetched={fetched} singleUser={singleUser.data[0]}/>
				</Card>
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		id: state.fetchingLoginStatus.data.id,
		singleUser: state.fetchingUserInfo,
		fetched: state.fetchingUserInfo.fetched
	}
}
export default connect(mapStateToProps)(UserInfoContainer)