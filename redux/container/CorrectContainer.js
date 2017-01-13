import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchItems } from '../actions/actions.js'
import { fetchingItems } from '../reducers/reducers.js'
import Correct from '../../component/admin/itemPool/Correct.js'

class CorrectContainer extends Component{
	render(){
		const { dispatch, fetchingItems } = this.props
		return (
			<Correct fetchingItems={ fetchingItems } 
					 onShow={
					 	(url,params) => dispatch(fetchItems(url,params))
					 }/>
			)
	}
} 

const mapStateToProps = state => {
	return { 
		fetchingItems: state.fetchingItems
	}

}
export default connect(mapStateToProps)(CorrectContainer)