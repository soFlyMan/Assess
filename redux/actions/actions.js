import nock from 'nock'

export const FETCH_ITEMS = 'FETCH_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const FETCH_ITEMS_ERROR = 'FETCH_ITEMS_ERROR'

const itemType = 'correct'

export function fetchItems(url,params) {
	return dispatch => {
		dispatch({type: FETCH_ITEMS})
		return fetch(url,params)
				.then(res=>res.json()
				.then(data=>{
					dispatch({ type: 'RECEIVE_ITEMS', payload: data.text})
				}).catch((err) => {
					dispatch({type: 'FETCH_ITEMS_ERROR'}, payload: err)
				})
					)
	}
}

// const couchdb = nock('http://myapp.iriscouch.com')
//                 .post('/items/correct')
//                 .reply(200, {
//                   text: 'fetched!!'
//                  })