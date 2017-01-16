import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { FETCH_ITEMS, RECEIVE_ITEMS, FETCH_ITEMS_ERROR } from '../actions/actions.js'

const initialState = {
	fetching: false,
	fetched: false,
	data: [],
	error: null,
}
const fetchingItems = (state=initialState,action) => {
	switch (action.type){
		case FETCH_ITEMS:
			return {
				...state,
				fetching: true,
			}
		case FETCH_ITEMS_ERROR:
			return {
				...state,
				fetching: false,
				error: action.payload,
			}
		case RECEIVE_ITEMS:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.payload,
			}
		default:
			return state

	}
}

const reducer = combineReducers({
	fetchingItems,
	routing: routerReducer
})
export default reducer