import  React,{ Component } from 'react'
import { connect } from 'react-redux'

import { fetchItems } from '../actions/actions.js'
import Item from '../../component/admin/itemPool/Item.js'

class Container extends Component{
	render(){
		const { dispatch, items } = this.props
		console.log(items)
		return (
			<Item items={items} onShow={dispatch(fetchItems())}/>
			)
	}
} 

const mapStateToProps = state => {
	return {
		text: 'hello'
	}

}
export default connect(mapStateToProps)(Container)