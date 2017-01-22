export const FETCH_USER = 'FETCH_USER'
export const FETCHED_USER = 'FETCHED_USER'
export const FETCH_USER_ERR = 'FETCH_USER_ERR'

export const FETCH_SINGLE_USER = 'FETCH_SINGLE_USER'
export const FETCHED_SINGLE_USER = 'FETCHED_SINGLE_USER'
export const FETCHE_SINGLE_USER_ERR = 'FETCHE_SINGLE_USER_ERR'

export const fetchUser = (url,params) => {
	return dispatch => {
		return dispatch({ type: FETCH_USER })
				fetch(url,params)
					.then(res => res.json()
						.then(data => {
							dispatch({ type: FETCHED_USER, payload: data })
						})).catch(err => {
						dispatch({ type: FETCH_USER_ERR, payload: err})
					})
	}
}

export const fetchSingleUser = (url,params) => {
	return dispatch => {
		return dispatch({ type: FETCH_SINGLE_USER })
				fetch(url,params)
					.then(res => res.json()
						.then(data => {
							dispatch({ type: FETCHED_SINGLE_USER, payload: data})
						})).catch(err => {
						dispatch({type: FETCHE_SINGLE_USER_ERR, payload: err})
					})
	}
}