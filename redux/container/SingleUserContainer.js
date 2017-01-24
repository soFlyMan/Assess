import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import { Link } from 'react-router'

import SingleUser from '../../component/admin/user/SingleUser.js'

class SingleUserContainer extends Component{
	render(){
		return (
			<Card title="个人信息" extra={<Link to="/admin/usercontainer"><span>返回</span></Link>}>
				<SingleUser />
			</Card>
			)
	}
}

export default connect()(SingleUserContainer)