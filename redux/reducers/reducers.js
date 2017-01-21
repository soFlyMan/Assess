import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { FETCH_ITEMS, RECEIVE_ITEMS, FETCH_ITEMS_ERROR,
		ADD_ITEMS, ADDED_ITEMS,
		DELETE_ITEMS, DELETED_ITEMS,
		MODI_ITEMS, MODIED_ITEMS,
		OPERA_ERROR,
		FETCH_PARAMS, FETCHED_PARAMS,
		MODI_PARAMS, MODIED_PARAMS,
		FETCH_PARAMS_ERROR
 		} from '../actions/actions.js'
import { fetchingScore, fetchingExampap } from './stuReducers.js'

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
				fetched: false
			}
		case FETCH_ITEMS_ERROR:
			return {
				...state,
				fetching: false,
				fetched: false,
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

const fetchStatus = ( state = { fetched: true,status: -1,error: null }, action) => {
	switch (action.type){
		case DELETE_ITEMS:
			return {
				...state,
				fetched: false,
				status: -1
			}
		case DELETED_ITEMS:
			return {
				...state,
				fetched: true,
				status: action.status
			}
		case ADD_ITEMS:
			return {
				...state,
				fetched: false,
				status: -1
			}
		case ADDED_ITEMS:
			return {
				...state,
				fetched: true,
				status: action.status
			}
		case MODI_ITEMS: 
			return {
				...state,
				fetched: false,
				status: -1
			}
		case MODIED_ITEMS:
			return {
				...state,
				fetched: true,
				status: action.status
			}
		case OPERA_ERROR:
			return {
				fetched: false,
				status: 0,
				error: action.payload

			}
		default:
			return state
	}
}

const fetchingParams = (state = initialState, action) => {
	switch(action.type){
		case FETCH_PARAMS:
			return {
				...state,
				fetching: true
			}
		case FETCH_PARAMS_ERROR:
			return {
				...state,
				fetching: false,
				error: action.payload
			}
		case FETCHED_PARAMS:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.payload
			}
		case MODI_PARAMS:
			return {
				...state
			}
		case MODIED_PARAMS:
			return {
				...state,
				data: action.payload
			}
		default:
			return state
	}
}
const reducer = combineReducers({
	fetchingItems,
	fetchStatus,
	fetchingParams,
	fetchingExampap,
	fetchingScore,
	routing: routerReducer
})
export default reducer