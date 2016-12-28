import { SHOW_USERS } from '../actions/actions.js'

const initialState = {
	userInfo: []
}
function users(state=initialState,action){
	switch (action.type){
		case SHOW_USERS:
			return Object.assign({},state,{
				...state.userInfo
			})
		case ADD_USER:
			return Object.assign({},state,{
				...state.userInfo,{
					username: action.user.username,
					password: action.user.password,
					userid: action.user.userid
				}
			})
		default:
			return state
	}
}

export default users