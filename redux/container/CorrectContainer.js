import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchItems, deleteItems, addItems, modiItems } from '../actions/actions.js'
import { fetchingItems, fetchStatus } from '../reducers/reducers.js'
import Correct from '../../component/admin/itemPool/Correct.js'

class CorrectContainer extends Component{
	render(){
		const { fetchingItems, fetchStatus, dispatch } = this.props
		return (
			<Correct fetchingItems={ fetchingItems }
				   fetchStatus={ fetchStatus } 
			       onShow={
			       	(url,params) => dispatch(fetchItems(url,params))
			       }
			       onDelete={
			       	(url,params) => dispatch(deleteItems(url,params))
			       }
			       onAdd={
		       		(url,params) => dispatch(addItems(url,params))
	       		   }
		       	   onModi={
		       	   	(url,params) => dispatch(modiItems(url,params))
		       	   }/>
			)
	}
}

const mapStateToProps = state => {
	return {
		fetchingItems: state.fetchingItems,
		fetchStatus: state.fetchStatus
	}
}

export default connect(mapStateToProps)(CorrectContainer)