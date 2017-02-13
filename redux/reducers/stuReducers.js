import { FETCH_SCORE,FETCH_SCORE_ERROR,RECEIVE_SCORE,
		 FETCH_EXAMPAPER, RECIEVE_EXAMPAPER, FETCH_EXAMPAPER_ERROR,
		 FETCH_LOGIN_STATUS,FETCHED_LOGIN_STATUS, FETCH_LOGIN_STATUS_ERR, LOG_OUT,
		 FETCH_USER_INFO, FETCHED_USER_INFO, FETCH_USER_INFO_ERR,
		 ADD_RANDOM_PAPER, ADDED_RANDOM_PAPER, ADD_RANDOM_PAPER_ERR,
		 STU_ANSWERS, ADD_SCORE, DEC_SCORE } from '../actions/stuActions.js'

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

export const fetchingLoginStatus = (state={fetching:false,fetched:false,data:{ },error:null,status: false}, action) => {
	switch(action.type){
		case FETCH_LOGIN_STATUS:
			return {
				...state,
				fetching: true,
				fetched: false,
				status: false,
			}
		case FETCH_LOGIN_STATUS_ERR:
			return {
				...state,
				feching: false,
				fetched: false,
				status: false,
				error: action.payload
			}
		case FETCHED_LOGIN_STATUS:
			return {
				...state,
				fetching: false,
				fetched: true,
				data: action.payload,
				status: action.payload.status
			}
		case LOG_OUT:
			return {
				...state,
				fetched: false,
				fetching: false,
				status: action.payload.status
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
// name: fields[Object.keys(fields)[0]].name,
// value: fields[Object.keys(fields)[0]].value
const answerState = {score: 0}
export const answers = (state=answerState,action) =>{
	const  fields  = action.fields
	switch(action.type){
		case STU_ANSWERS:
			return {
				...state,
				[fields[Object.keys(fields)[0]].name]: fields[Object.keys(fields)[0]].value
			}
		case ADD_SCORE:
			return {
				...state,
				score: state.score+action.score
			}
		case DEC_SCORE:
			return {
				...state,
				score: state.score-action.score
			}
		default:
			return state
	}
}
