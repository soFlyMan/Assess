import React,{ Component } from 'react'
import { Card } from 'antd' 

import Section from '../admin/course/Section.js'
import Nav from '../Nav.js'

export default class Course extends Component{
	constructor(props){
		super(props)
		this.state={

		}
	}
	render(){
		return (
			<div>
				<Nav nav={'assessNavChange'}/>
				<div className="course">
					<div className="course-desc">
					</div>
					<Card className="course-content" bordered={false} style={{minHeight: 500}}>
							<Section />
					</Card>
				</div>
			</div>
			)
	}
}