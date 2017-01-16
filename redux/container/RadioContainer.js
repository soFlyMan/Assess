import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchItems, deleteItems, addItems, modiItems } from '../actions/actions.js'
import { fetchingItems } from '../reducers/reducers.js'
import Radio from '../../component/admin/itemPool/Radio.js'

class RadioContainer extends Component{
	render(){
		const { fetchingItems, dispatch } = this.props
		return (
			<Radio fetchingItems={ fetchingItems } 
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
		fetchingItems: state.fetchingItems
	}
}

export default connect(mapStateToProps)(RadioContainer)