import { FETCH_SCORE,FETCH_SCORE_ERROR,RECEIVE_SCORE,
		 FETCH_EXAMPAPER, RECIEVE_EXAMPAPER, FETCH_EXAMPAPER_ERROR,
		 FETCH_LOGIN_STATUS,FETCHED_LOGIN_STATUS, FETCH_LOGIN_STATUS_ERR, LOG_OUT,
		 FETCH_USER_INFO, FETCHED_USER_INFO, FETCH_USER_INFO_ERR,
		 ADD_RANDOM_PAPER, ADDED_RANDOM_PAPER, ADD_RANDOM_PAPER_ERR } from '../actions/stuActions.js'

const initialState = {
	fetching: false,
	fetched: false,
	text:'123',
	error: null
}

export const fetchingScore = (state = initialState, action) => {
	switch(action.type){
		case FETCH_SCORE:
			return {
				...state,
				fetching: true
			}
		default: 
			return state
	}
}

export const fetchingExampap = (state={fetching:false,fetched:false,data:[],error:null }, action) => {
	switch(action.type){
		case FETCH_EXAMPAPER:
			return {
				...state,
				fetching: true,
				fetched: false
			}
		case FETCH_EXAMPAPER_ERROR:
			return {
				...state,
				fetching: false,
				fetched: false,
				error: action.payload
			}
		case RECIEVE_EXAMPAPER:
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

export const fetchingLoginStatus = (state={fetching:false,fetched:false,data:{ },error:null}, action) => {
	switch(action.type){
		case FETCH_LOGIN_STATUS:
			return {
				...state,
				fetching: true,
				fetched: false
			}
		case FETCH_LOGIN_STATUS_ERR:
			return {
				...state,
				feching: false,
				fetched: false,
				error: action.payload
			}
		case FETCHED_LOGIN_STATUS:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.payload
			}
		case LOG_OUT:
			return {
				...state,
				fetched: false,
				fetching: false
			}
		default: 
			return state
	}
}

export const fetchingUserInfo = (state={fetching: false,fetched: false, data: [], error: null},action) => {
	switch(action.type){
		case FETCH_USER_INFO:
			return {
				...state,
				fetching: false,
				fetched: false
			}
		case FETCH_USER_INFO_ERR:
			return {
				...state,
				fetching: false,
				fetched: false,
				error: action.payload
			}
		case FETCHED_USER_INFO:
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
