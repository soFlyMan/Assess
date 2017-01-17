import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { FETCH_ITEMS, RECEIVE_ITEMS, FETCH_ITEMS_ERROR,
		ADD_ITEMS, ADDED_ITEMS,
		DELETE_ITEMS, DELETED_ITEMS,
		MODI_ITEMS, MODIED_ITEMS
 		} from '../actions/actions.js'

const initialState = {
	fetching: false,
	fetched: false,
	data: [],
	error: null,
	status: -1
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

const fetchStatus = ( state = { status: -1 }, action) => {
	switch (action.type){
		case DELETE_ITEMS:
			return {
				status: -1
			}
		case DELETED_ITEMS:
			return {
				status: data.status
			}
		case ADD_ITEMS:
			return {
				status: -1
			}
		case ADDED_ITEMS:
			return {
				status: data.status
			}
		case MODI_ITEMS: 
			return {
				status: -1
			}
		case MODIED_ITEMS:
			return {
				status: data.status
			}
		default:
			return state
	}
}
const reducer = combineReducers({
	fetchingItems,
	fetchStatus,
	routing: routerReducer
})
export default reducer