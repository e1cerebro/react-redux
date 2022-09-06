import { createSlice } from '@reduxjs/toolkit'

const INITIAL_COUNTER_STATE = {
	counter: 0,
	visible: true
};

export default createSlice({
	name: 'counter',
	initialState: INITIAL_COUNTER_STATE,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + Number(action.payload);
		},
		toggle(state) {
			state.visible = !state.visible;
		},
	}
});