export const FETCH_ITEMS = 'FETCH_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

export const DELETE_ITEMS ='DELETE_ITEMS'
export const DELETED_ITEMS ='DELETE_ITEMS'

export const fetchItems = (url,params) => {
	return dispatch => {
		dispatch({ type: FETCH_ITEMS })
		return fetch(url,params)
				.then(res => res.json()
					.then(data => {
						dispatch({ type: RECEIVE_ITEMS, payload: data})
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
						dispatch({ type: FETCH_ITEMS_ERROR, payload: err })
				})
	}
}
