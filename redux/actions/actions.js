import nock from 'nock'

export const FETCH_ITEMS = 'FETCH_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'

const itemType = 'correct'

export function fetchItems() {
	return dispatch => {
		dispatch({type: FETCH_ITEMS})
		return fetch('item/correct')
				.then(res=>res.json()
				.then(data=>{
					dispatch({ type: 'RECEIVE_ITEMS',payload:data})
				})
					)
	}
}

const couchdb = nock('item')
                .get('/correct')
                .reply(200, {
                  _id: '123ABC',
                  _rev: '946B7D1C',
                  username: 'pgte',
                  email: 'pedro.teixeira@gmail.com'
                 })