import { createSlice } from '@reduxjs/toolkit'

const INITIAL_AUTH_STATE = {
	isAuthenticated: false,
}

export default createSlice({
	name: 'auth',
	initialState: INITIAL_AUTH_STATE,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		}
	}
})