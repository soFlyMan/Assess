import React,{ Component } from 'react'
import { Card, Button, Collapse } from 'antd'

const Panel = Collapse.Panel
export default class Section extends Component{
	constructor(props){
		super(props)
		this.state={
			text: 'asd',
			coursename: 'Java语言程序设计',
			characters: []
		}
	}
	componentWillMount(){
		const course = {
			coursename:this.state.coursename
		}
		const _self = this
		const req = new Request('/course/characters',{
			method: 'POST',
			headers: {
            "Content-Type": "application/json"
          },
          	body: JSON.stringify(course)
		})
		fetch(req).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					_self.setState({
						characters: data.characters
					})
				})
			}
		}).catch(function(err){
			console.log(err.message)
		})
	}
	render(){
		var key= 1
		var sectionKey= 1
		var content = this.state.characters.map((character)=>
					<Panel header={character.charactername} key={key++}>
						<Collapse header={false} defaultActiveKey='1'>
							{character.sections.map((section)=>
								<Panel header={section.sectionname} key={sectionKey++}>
									<p>{section.content}</p>
								</Panel>
								)}
						</Collapse>
					</Panel>
		)
		return (
			<Card title="章节管理" style={{minHeight: 500}} 
			extra={<Button type="default">添加章节</Button>}>
				<Collapse>
			    	{content}
			    </Collapse>
			</Card>
	)}
}