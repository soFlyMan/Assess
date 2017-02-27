import React, { Component } from  'react'
import { connect } from 'react-redux'

import Exam from '../../component/student/Exam.js'
import SingleUserInfo from '../../component/admin/user/SingleUserInfo'
import { fetchUserInfo } from '../actions/stuActions.js'

class ReferPaperContainer extends Component{
	componentDidMount(){
		const { id, dispatch, result } = this.props
		const _result = {
			result: result,
			id: id
		}
		fetch('/user/result',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'same-origin',
			body: JSON.stringify(_result)
		}).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					console.log('data',data)
					dispatch(fetchUserInfo(`/user/${id}`,{
						method: 'POST',
						credentials: 'same-origin'
					}))
				})
			}
		}).then(function(err){
			console.log(err)
		})
	}
	render(){
		const { result, fetchingUserInfo, fetched } = this.props
		if(fetched){
			var exampaper = fetchingUserInfo.data[0].exampaper
			var paper = exampaper[exampaper.length-1]
		}else{
			var paper = {}
		}
		return (
			<Exam>
				<SingleUserInfo fetched={fetched} result={result} paper={paper}/>
			</Exam>
			)
	}
}


const mapStateToProps = state => {
	return {
		result: state.result,
		fetched: state.fetchingUserInfo.fetched,
		fetchingUserInfo: state.fetchingUserInfo,
		id: state.fetchingLoginStatus.data.id
	}
}
export default connect(mapStateToProps)(ReferPaperContainer)