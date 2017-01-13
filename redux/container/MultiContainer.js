import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchItems } from '../actions/actions.js'
import { fetchingItems } from '../reducers/reducers.js'
import Multi from '../../component/admin/itemPool/Multi.js'

class MultiContainer extends Component{
	render(){
		const { fetchingItems, dispatch } = this.props
		return (
			<Multi fetchingItems={ fetchingItems } 
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

export default connect(mapStateToProps)(MultiContainer)