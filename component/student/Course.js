import React,{ Component } from 'react'
import { Card, Collapse } from 'antd' 

import Section from '../admin/course/Section.js'

const Panel = Collapse.Panel
export default class Course extends Component{
	constructor(props){
		super(props)
		this.state={

		}
	}
	render(){
		return (
			<Card title="java程序设计">
				<Collapse>
					<Section />
				</Collapse>
			</Card>
			)
	}
}