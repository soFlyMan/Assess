import { FETCH_USER, FETCHED_USER, FETCH_USER_ERR,
		FETCH_SINGLE_USER, FETCHED_SINGLE_USER, FETCH_SINGLE_USER_ERR } from '../actions/userActions.js'



export const fetchingUser = (state={fetching:false,fetched: false, data: [], error: null },action) => {
	switch(action.type){
		case FETCH_USER:
			return {
				...state,
				fetching: true,
				fetched: false
			}
		case FETCH_USER_ERR:
			return {
				...state,
				fetching: false,
				fetched: false,
				error: action.payload
			}
		case FETCHED_USER:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.payload
			}
		default:
			return state
	}
}

export const fetchingSingleUser = (state={fetching: false, fetched: false, data: [], exampaper: [], error: null},action) => {
	switch(action.type){
		case FETCH_SINGLE_USER: 
			return {
				...state,
				fetching: true,
				fetched: false
			}
		case FETCH_SINGLE_USER_ERR:
			return {
				...state,
				fetching: false,
				fetched: false,
				error: action.payload
			}
		case FETCHED_SINGLE_USER:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.payload,
				exampaper: action.payload[0].exampaper
			}
		default: 
			return state
	}
}