import React,{ Component } from 'react'
import { Collapse, Icon } from 'antd'

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
	componentDidMount(){
		const course = {
			coursename:this.state.coursename
		}
		const _self = this
		const req = new Request('/course/characters',{
			method: 'POST',
			credentials: 'same-origin',
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
	handlePlay = url => {
		const { playVideo } = this.props
		playVideo(url)
		console.log(url)
	}
	render(){
		const { playVideo } = this.props
		var key= 1
		var sectionKey= 1
		var content = this.state.characters.map((character)=>
					<Panel header={character.charactername} key={key++}>
						<Collapse header={false} defaultActiveKey='1'>
							{character.sections.map((section)=>
								<Panel header={section.sectionname} key={sectionKey++}>
									<div><a onClick={()=>this.handlePlay(section.video)}><Icon type="play-circle" />观看视频</a></div>
									<p>{section.content}</p>
								</Panel>
								)}
						</Collapse>
					</Panel>
		)
		return (
				<Collapse>
			    	{content}
			    </Collapse>
	)}
}
