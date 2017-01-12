import  React,{ Component } from 'react'
import { connect } from 'react-redux'

import { fetchItems } from '../actions/actions.js'
import { fetchingItems } from '../reducers/reducers.js'
import Item from '../../component/admin/itemPool/Item.js'

class ItemContainer extends Component{
	render(){
		const { dispatch, fetchingItems } = this.props
		console.log('123')
		console.log(fetchingItems)
		return (
			<Item fetchingItems={fetchingItems} onShow={(url,params) => dispatch(fetchItems(url,params))}/>
			)
	}
} 

const mapStateToProps = state => {
	return { 
		fetchingItems: state.fetchingItems
	}

}
export default connect(mapStateToProps)(ItemContainer)