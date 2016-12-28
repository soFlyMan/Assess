export const SHOW_USERS = 'SHOW_USERS'
export const ADD_USER = 'ADD_USER'

const user = {
	username: '',
	password: '',
	userid: ''
}

export function showUsers(id) = {
	return {
		type: SHOW_USERS,
		id
	}
}

export function addUser(user) = {
	return {
		type: ADD_USER,
		user
	}
}