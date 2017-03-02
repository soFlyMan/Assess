export const FETCH_SCORE = 'FETCH_SCORE'
export const RECIEVE_SCORE = 'RECIEVE_SCORE'
export const FETCH_SCORE_ERR = 'FETCH_SCORE_ERR'

export const FETCH_EXAMPAPER = 'FETCH_EXAMPAPER'
export const RECIEVE_EXAMPAPER = 'RECIEVE_EXAMPAPER'
export const FETCH_EXAMPAPER_ERROR = 'FETCH_EXAMPAPER_ERROR'

export const FETCH_LOGIN_STATUS = 'FETCH_LOGIN_STATUS'
export const FETCHED_LOGIN_STATUS = 'FETCHED_LOGIN_STATUS'
export const FETCH_LOGIN_STATUS_ERR = 'FETCH_LOGIN_STATUS_ERR'

export const LOG_OUT = 'LOG_OUT'

export const FETCH_USER_INFO = 'FETCH_USER_INFO'
export const FETCHED_USER_INFO = 'FETCHED_USER_INFO'
export const FETCH_USER_INFO_ERR = 'FETCH_USER_INFO_ERR'

export const ADD_RANDOM_PAPER = 'ADD_RANDOM_PAPER'
export const ADDED_RANDOM_PAPER = 'ADDED_RANDOM_PAPER'
export const ADD_RANDOM_PAPER_ERR = 'ADD_RANDOM_PAPER_ERR'

export const FETCH_EXAM_STATUS = 'FETCH_EXAM_STATUS'
export const FETCHED_EXAM_STATUS = 'FETCHED_EXAM_STATUS'
export const FETCH_EXAM_STATUS_ERR = 'FETCH_EXAM_STATUS_ERR'
export const EXAM_END = 'EXAM_END'

export const STU_ANSWERS = 'STU_ANSWERS'
export const ADD_SCORE = 'ADD_SCORE'
export const DEC_SCORE = 'DEC_SCORE'


export const fetchScore = (url,params) => {
	return dispatch => {
		dispatch({type: FETCH_SCORE})
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({ type: 'RECIEVE_SCORE', payload: data})
					})).catch(err => {
					dispatch({ type: 'FETCH_SCORE_ERR', payload: err})
				})
	}
}

export const fetchExampap = (url,params) => {
	return dispatch => {
		dispatch({type: FETCH_EXAMPAPER})
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({type: 'RECIEVE_EXAMPAPER', payload: data})
					})).catch(err => {
					dispatch({ type: 'FETCH_EXAMPAPER_ERROR', payload: err})
				})
	}
}

export const fetchLoginStatus = (url,params) => {
	return dispatch => {
		dispatch({ type: FETCH_LOGIN_STATUS})
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({type: 'FETCHED_LOGIN_STATUS', payload: data})
					})).catch(err => {
					dispatch({ type: 'FETCH_LOGIN_STATUS_ERR', payload: err})
				})
	}
}

export const logOut = (url,params) => {
	return dispatch => {
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({type: 'LOG_OUT'})
					})).catch(err => {
					dispatch({type: 'FETCH_LOGIN_STATUS_ERR', payload: err})
				})
	}
}

export const fetchUserInfo = (url,params) => {
	return dispatch => {
		dispatch({ type: FETCH_USER_INFO })
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({type: FETCHED_USER_INFO, payload: data})
					})).catch(err => {
					dispatch({type: FETCH_USER_INFO_ERR, payload: err})
				})
	}
}

export const addRandomPaper = (url,params) => {
	return dispatch => {
		dispatch({type: ADD_RANDOM_PAPER})
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({type: ADDED_RANDOM_PAPER, payload: data.status})
					})).catch(err => {
					dispatch({ type: ADD_RANDOM_PAPER_ERR, payload: err})
				})
	}
}

export const fetchExamStatus = (url,params) => {
	return dispatch => {
		dispatch({type: FETCH_EXAM_STATUS})
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({type: FETCHED_EXAM_STATUS, payload: data})
					})).catch(err => {
					dispatch({type: FETCH_EXAM_STATUS_ERR, payload: err})
				})
	}
}

export const examEnd = () => {
	return {
		type: EXAM_END
	}
}

export const stuAnswer = (fields) => {
	return {
		type: STU_ANSWERS,
		fields
	}
}

export const addScore = (score) => {
	return {
		type: ADD_SCORE,
		score
	}
}

export const decScore = (score) => {
	return {
		type: DEC_SCORE,
		score
	}
}