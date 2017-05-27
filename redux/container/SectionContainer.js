import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Modal, Input, Menu, Dropdown } from 'antd'

import Section from '../../component/admin/course/Section.js'

class SectionContainer extends Component{
	constructor(props){
		super(props)
		this.state={visible: false, sectionNumber: 1, section: (<div>
			<Input  addonBefore="视频链接url"/>
			<Input addonBefore="第一节名称" />
		<div style={{width: 10,marginBottom: 10}} ></div>
		<Input type="textarea" rows={4} addonBefore="第一节内容" /></div>)}
	}
	showModal=()=>{
		this.setState({
			visible: true
		})
	}
	handleCancel = () => {
		this.setState({
			visible: false
		})
	}
	setTwoSection = () => {
		this.setState({
			sectionNumber: 2,
			section: (<div>
									<Input  addonBefore="视频链接url"/>
									<Input addonBefore="第一节名称" /><Input type="textarea" rows={4} addonBefore="第一节内容" />
									<div style={{width: 10,marginBottom: 10}} ></div>
									<Input  addonBefore="视频链接url"/>
									<Input addonBefore="第二节名称" /><Input type="textarea" rows={4} addonBefore="第二节内容" />
									<div style={{width: 10,marginBottom: 10}} ></div>
								</div>)
		})
	}
	setThreeSection = () => {
		console.log("asd")
		this.setState({
			sectionNumber: 3,
			section: (<div>
									<Input  addonBefore="视频链接url"/>
									<Input addonBefore="第一节名称" /><Input type="textarea" rows={4} addonBefore="第一节内容" />
									<div style={{width: 10,marginBottom: 10}} ></div>
									<Input  addonBefore="视频链接url"/>
									<Input addonBefore="第二节名称" /><Input type="textarea" rows={4} addonBefore="第二节内容" />
									<div style={{width: 10,marginBottom: 10}} ></div>
									<Input  addonBefore="视频链接url"/>
									<Input addonBefore="第三节名称" /><Input type="textarea" rows={4} addonBefore="第三节内容" />
									<div style={{width: 10,marginBottom: 10}} ></div>
								</div>)
		})
	}
	setForSection = () => {
		this.setState({
			sectionNumber: 4,
			section: (<div>
									<Input  addonBefore="视频链接url"/>
									<Input addonBefore="第一节名称" /><Input type="textarea" rows={4} addonBefore="第一节内容" />
									<div style={{width: 10,marginBottom: 10}} ></div>
									<Input  addonBefore="视频链接url"/>
									<Input addonBefore="第二节名称" /><Input type="textarea" rows={4} addonBefore="第二节内容" />
									<div style={{width: 10,marginBottom: 10}} ></div>
									<Input  addonBefore="视频链接url"/>
									<Input addonBefore="第三节名称" /><Input type="textarea" rows={4} addonBefore="第三节内容" />
									<div style={{width: 10,marginBottom: 10}} ></div>
										<Input  addonBefore="视频链接url"/>
										<Input addonBefore="第四节名称" /><Input type="textarea" rows={4} addonBefore="第四节内容" />
										<div style={{width: 10,marginBottom: 10}} ></div>
								</div>)
		})
	}
	render(){
		var input = {
			width: 10,
			marginBottom: 10
		}
		var menu = (
								<Menu>
									<Menu.Item><span style={{width: 80}} onClick={this.setTwoSection}>设置2节</span></Menu.Item>
									<Menu.Item><span style={{width: 80}} onClick={this.setThreeSection}>设置3节</span></Menu.Item>
									<Menu.Item><span style={{width: 80}} onClick={this.setForSection}>设置4节</span></Menu.Item>
								</Menu>)
		console.log(menu)
		return (
			<Card title="章节管理" style={{minHeight: 500}}
				  extra={<Button type="default" onClick={this.showModal}>添加章节</Button>}>
				  <Section />
						<Modal title="添加章节"
				          visible={this.state.visible}
				          onOk={this.handleOk}
				          confirmLoading={this.state.confirmLoading}
				          onCancel={this.handleCancel}
				        >
								<Input  addonBefore="视频链接url"/>
								<div style={input} ></div>
								<Input  addonBefore="章名称"/>
								<div style={input} ></div>
								<div style={{marginBottom: 40,paddingLeft: 340}}>
									<Dropdown overlay={menu}>
										<Button style={{width: 80}}>设置节数</Button>
								  </Dropdown>
									<span>节数：{this.state.sectionNumber}</span>
								</div>
								{this.state.section}
							</Modal>
			</Card>
			)
	}
}

export default connect()(SectionContainer)
