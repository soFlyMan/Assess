import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { FETCH_ITEMS, RECEIVE_ITEMS } from '../actions/actions.js'

const initialState = {
	text: 'hello'
}
function fetchItems(state=initialState,action){
	switch (action.type){
		case FETCH_ITEMS:
			return {
				test: 'hello world'
			}
		default:
			return state

	}
}

function items(state=[],action){
	switch (action.type){
		case RECEIVE_ITEMS:
			return [
			...state,payload
			]
		default:
			return state
	}
}

const reducer = combineReducers({
	fetchItems,
	items,
	routing: routerReducer
})
export default reducer