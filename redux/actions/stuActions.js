export const FETCH_SCORE = 'FETCH_SCORE'
export const RECIEVE_SCORE = 'RECIEVE_SCORE'
export const FETCH_SCORE_ERR = 'FETCH_SCORE_ERR'

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