export const FETCH_ITEMS = 'FETCH_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const DELETE_ITEMS ='DELETE_ITEMS'
export const DELETED_ITEMS ='DELETED_ITEMS'

export const ADD_ITEMS = 'ADD_ITEMS'
export const ADDED_ITEMS = 'ADDED_ITEMS'

export const MODI_ITEMS = 'MODI_ITEMS'
export const MODIED_ITEMS = 'MODIED_ITEMS'

export const OPERA_ERROR = 'OPERA_ERROR'

export const FETCH_PARAMS = 'FETCH_PARAMS'
export const FETCHED_PARAMS = 'FETCHED_PARAMS'
export const FETCH_PARAMS_ERROR ='FETCH_PARAMS_ERROR'
export const MODI_PARAMS = 'MODI_PARAMS'
export const MODIED_PARAMS = 'MODIED_PARAMS'

export const FETCH_SINGLE = 'FETCH_SINGLE'
export const FETCHED_SINGLE = 'FETCHED_SINGLE'
export const FETCH_SINGLE_ERR = 'FETCH_SINGLE_ERR'

export const fetchItems = (url,params) => {
	return dispatch => {
		dispatch({ type: FETCH_ITEMS })
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({ type: RECEIVE_ITEMS, payload: data })
					})).catch(err => {
						dispatch({ type: FETCH_ITEMS_ERROR, payload: err })
					})
	}
}

export const deleteItems = (url,params) => {
	return dispatch => {
		dispatch({ type: DELETE_ITEMS })
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({ type: DELETED_ITEMS, status: data.status})
					})).catch(err => {
						dispatch({ type: OPERA_ERROR, payload: err })
				})
	}
}

export const addItems = (url,params) => {
	return dispatch => {
		dispatch({ type: ADD_ITEMS })
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({ type: ADDED_ITEMS, status: data.status })
					})).catch(err => {
					dispatch({ type: OPERA_ERROR, payload: err })
				})
	}
}

export const modiItems = (url,params) => {
	return dispatch => {
		dispatch({ type: MODI_ITEMS })
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({ type: MODIED_ITEMS, status: data.status})
					})).catch(err => {
					dispatch({ type: OPERA_ERROR, payload: err})
				})
	}
}

export const fetchParams = (url,params) => {
	return dispatch => {
		dispatch({ type: FETCH_PARAMS })
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({ type: FETCHED_PARAMS, payload: data})
					})).catch(err => {
					dispatch({ type: FETCH_PARAMS_ERROR, payload: err})
				})
	}
}

export const modiParams = (url,params) => {
	return dispatch => {
		dispatch({ type: MODI_PARAMS })
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({ type: MODIED_PARAMS, payload: data})
					})).catch(err => {
					dispatch({ type: FETCH_PARAMS_ERROR, payload: err})
				})
	}
}

export const fetchSinglePaper = (url,params) => {
	return dispatch => {
		dispatch({ type: FETCH_SINGLE})
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({ type: FETCHED_SINGLE, payload: data })
					})).catch(err => {
					dispatch({ type: FETCH_SINGLE_ERR, payload: err})
				})
	}
}
// export const modiParams = (params) => {
// 	return {
// 		action: MODI_PARAMS,
// 		params
// 	}
// }
