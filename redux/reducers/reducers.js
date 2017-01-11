import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { FETCH_ITEMS, RECEIVE_ITEMS, FETCH_ITEMS_ERROR } from '../actions/actions.js'

const initialState = {
	fetching: false,
	fetched: false,
	text: 'hello',
	error: null
}
function fetchItems(state=initialState,action){
	switch (action.type){
		case FETCH_ITEMS:
			return {
				...state,
				fetching: true,
			}
		default:
			return state

	}
}

function items(state=[],action){
	switch (action.type){
		case FETCH_ITEMS_ERROR:
			return {
				...state,
				fetching: false,
				error: action.payload
			}
		case RECEIVE_ITEMS:
			return {
			...state,
			fetching: false,
			fetched: true,
			text: action.payload
			}
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