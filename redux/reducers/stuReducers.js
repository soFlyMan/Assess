import { FETCH_SCORE,FETCH_SCORE_ERROR,RECEIVE_SCORE,
		 FETCH_EXAMPAPER, RECIEVE_EXAMPAPER, FETCH_EXAMPAPER_ERROR } from '../actions/stuActions.js'

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
 
