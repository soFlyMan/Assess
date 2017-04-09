import React,{ Component } from 'react'
import { connect } from 'react-redux'

import { Card } from 'antd'

import Section from '../admin/course/Section.js'
import Nav from '../Nav.js'

import { Player } from 'video-react'

import "../../node_modules/video-react/dist/video-react.css"

import { playVideo } from '../../redux/actions/stuActions.js'

class Course extends Component{
	constructor(props){
		super(props)
		this.state={
			url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
		}
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
	}
	render(){
		const { dispatch, url } = this.props
		console.log(url)
		if(url==""){
			return (
				<div>
					<Nav nav={'assessNavChange'}/>
					<div className="course" style={{marginTop:60}}>
						<Card className="course-content" bordered={false} style={{minHeight: 800}}>
								<Section playVideo={(url) => dispatch(playVideo(url))} />
						</Card>
					</div>
				</div>
			)
		}else{
		return (
			<div>
				<Nav nav={'assessNavChange'}/>
				<div className="course">
					<div className="course-desc">
						<Player>
	      			<source src={this.props.url} />
	    			</Player>
					</div>
					<Card className="course-content" bordered={false} style={{minHeight: 800}}>
							<Section playVideo={(url) => dispatch(playVideo(url))} />
					</Card>
				</div>
			</div>
			)
		}
	}
}


const mapStateToProps = state => {
	return {
		url: state.videos.url
	}
}
export default connect(mapStateToProps)(Course)
