import  React,{ Component,PropTypes } from 'react'
import { connect } from 'react-redux'

import AssessShow from '../../component/AssessShow.js'

class Container extends Component{
	render(){
		const { dispatch } = this.props
		return (
			<AssessShow onShow={id=>dispatch(showUsers(id))}/>
			)
	}
} 

Container.propTypes = {
	
}