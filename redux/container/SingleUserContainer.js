import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import { Link } from 'react-router'

import SingleUser from '../../component/admin/user/SingleUser.js'

class SingleUserContainer extends Component{
	render(){
		const { fetchingSingleUser, fetched } = this.props
		return (
			<Card title="个人信息" extra={<Link to="/admin/usercontainer"><span>返回</span></Link>}>
				<SingleUser singleUser={fetchingSingleUser.data[0]}
						    fetched={fetched}
						    tabPosition="left"/>
			</Card>
			)
	}
}

const mapStateToProps = state => {
	return {
		fetchingSingleUser: state.fetchingSingleUser,
		fetched: state.fetchingSingleUser.fetched
	}
}
export default connect(mapStateToProps)(SingleUserContainer)