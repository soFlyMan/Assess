import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchItems } from '../actions/actions.js'
import { fetchingItems } from '../reducers/reducers.js'
import Programming from '../../component/admin/itemPool/Programming.js'

class ProgrammingContainer extends Component{
	render(){
		const { fetchingItems, dispatch } = this.props
		return (
			<Programming fetchingItems={ fetchingItems } 
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

export default connect(mapStateToProps)(ProgrammingContainer)