const { createSlice } = require('@reduxjs/toolkit');
const UiReducer = createSlice({
	name: 'ui',
	initialState: {
		counter: 0,
	},
	reducers: {
		increment(state, action) {
			state.counter = state.counter + action.payload;
		},
		decrement(state, action) {
			state.counter = state.counter - action.payload;
		},
	},
});

const { actions } = UiReducer;

export const { increment, decrement } = actions;

export default UiReducer;
