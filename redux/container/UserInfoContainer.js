import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'

import { fetchUserInfo, fetchExamStatus } from '../actions/stuActions.js'

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
		var { fetched, singleUser, examstatus } = this.props
		// var test = false
		if(examstatus){
			if(fetched){
				var paper = Object.assign({},singleUser.data[0])
				paper.exampaper.pop()
			}
		}
		return (
			<div>
				<Nav nav={'assessNavChange'}/>
				<Card style={{marginTop: 100, marginRight: 280, marginLeft: 280}}>
					<SingleUser fetched={fetched} 
								singleUser={singleUser.data[0]}
								tabPosition="left"/>
				</Card>
			</div>
			)
	}
}

const mapStateToProps = state => {
	return {
		id: state.fetchingLoginStatus.data.id,
		singleUser: state.fetchingUserInfo,
		fetched: state.fetchingUserInfo.fetched,
		examstatus: state.examStatus.examstatus
	}
}
export default connect(mapStateToProps)(UserInfoContainer)