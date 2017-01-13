import { FETCH_SCORE,FETCH_SCORE_ERROR,RECEIVE_SCORE } from '../actions/stuActions.js'

const initialState = {
	fetching: false,
	fetched: false,
	text:'123',
	error: null
}

const fetchingScore = (state = initialState, action) => {
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

export default fetchingScore
