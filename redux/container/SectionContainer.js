import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'antd'

import Section from '../../component/admin/course/Section.js'

class SectionContainer extends Component{
	render(){
		return (
			<Card title="章节管理" style={{minHeight: 500}} 
				  extra={<Button type="default">添加章节</Button>}>
				  <Section />
			</Card>
			)
	}
}

export default connect()(SectionContainer)